/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable unicorn/no-process-exit */
import { exec as _exec } from 'node:child_process';
import { promises as fs } from 'node:fs';
import { promisify } from 'node:util';

const exec = promisify(_exec);

// Parses package.json files and returns the package names
async function getPackagesNames(files) {
  const names: string[] = [];
  for (const file of files) {
    const data: {
      name: string;
      private: boolean;
    } = JSON.parse(await fs.readFile(file, 'utf8'));

    if (!data.private) {
      names.push(data.name);
    }
  }
  return names;
}

async function createChangeset(fileName, packageBumps, packages) {
  let message = '';
  for (const [pkg, bump] of packageBumps) {
    message = message + `Updated dependency \`${pkg}\` to \`${bump}\`.\n`;
  }

  const pkgs = packages.map(pkg => `'${pkg}': patch`).join('\n');
  const body = `---\n${pkgs}\n---\n\n${message.trim()}\n`;
  await fs.writeFile(fileName, body);
}

async function getBumps(files) {
  const bumps = new Map();
  for (const file of files) {
    const { stdout } = await exec('git show', file);
    const changes = stdout.toString();

    for (const change of changes.split('\n')) {
      if (!change.startsWith('+ ')) {
        continue;
      }
      const match = change.match(/"(.*?)"/g);

      if (match) {
        bumps.set(match[0].replace(/"/g, ''), match[1].replace(/"/g, ''));
      }
    }
  }
  return bumps;
}

const branch = await exec('git branch --show-current');
if (!branch.stdout.startsWith('renovate/')) {
  console.log('Not a renovate branch, skipping');

  process.exit(0);
}

const diffOutput = await exec('git diff --name-only HEAD~1');
const diffFiles = diffOutput.stdout.split('\n');
if (diffFiles.some(f => f.startsWith('.changeset'))) {
  console.log('Changeset already exists, skipping');

  process.exit(0);
}

const files = diffFiles
  .filter(file => file !== 'package.json') // skip root package.json
  .filter(file => file.includes('package.json'));

const packageNames = await getPackagesNames(files);

if (packageNames.length === 0) {
  console.log('No package.json changes to published packages, skipping');

  process.exit(0);
}

const { stdout: shortHash } = await exec('git rev-parse --short HEAD');
const fileName = `.changeset/renovate-${shortHash.trim()}.md`;

const packageBumps = await getBumps(files);
await createChangeset(fileName, packageBumps, packageNames);
await exec('git add ' + fileName);
await exec('git commit -C HEAD --amend --no-edit');
await exec('git push --force');
