#!/usr/bin/env node
/* eslint-disable security/detect-non-literal-fs-filename */

import { exec as _exec } from 'node:child_process';
import { promises as fs } from 'node:fs';
import { promisify } from 'node:util';

const exec = promisify(_exec);

const branch = await exec('git branch --show-current');
if (!branch.stdout.startsWith('renovate/')) {
  console.log('Not a renovate branch, skipping');

  process.exit(0);
}

const diffOutput = await exec('git diff --name-only HEAD~1');
const diffFiles = diffOutput.stdout
  .split('\n')
  .filter(file => file !== 'package.json')
  .filter(file => file.includes('package.json'));
if (diffFiles.some(f => f.startsWith('.changeset'))) {
  console.log('Changeset already exists, skipping');

  process.exit(0);
}

// If changed file does not include package.json in monorepo, skip
if (!diffFiles.some(file => file.includes('package.json'))) {
  console.log('No package.json changes to published packages, skipping');

  process.exit(0);
}

// Get changed dependencies inside package.json files, return array of package { name, version }
/**
 * name: '@renovate/project-demo',
 * dependencies: {
 *  + "@renovate/eslint-config": "1.0.1",
 *  - "@renovate/eslint-config": "1.0.0",
 *  + "@renovate/stylelint-config": "1.0.1",
 *  - "@renovate/stylelint-config": "1.0.0",
 * }
 *
 * so we need to get the dependency names and versions in array of { name: '@renovate/eslint-config', newVersion: '1.0.1', oldVersion: '1.0.0' }, ...
 */
// Find all changed package.json files and extract their dependencies
const packageJsonFiles = await Promise.all(
  diffFiles.map(file => fs.readFile(file, 'utf8').then(data => ({ file, data }))),
);

const dependencies: {
  name: string;
  newVersion: string;
  projects: string[];
}[] = [];

// eslint-disable-next-line sonarjs/cognitive-complexity
const getChangedDependencies = (
  projectName: string,
  newDepsObj: Record<string, string>,
  oldDepsObj: Record<string, string>,
) => {
  for (const [depName, newVersion] of Object.entries(newDepsObj)) {
    if (typeof newVersion !== 'string') continue;

    const oldVersion: string = oldDepsObj[String(depName)];

    // Check if the dependency version has changed
    if (oldVersion === newVersion) continue;

    // Check if the dependency exists in other projects and new version is the same
    if (
      dependencies.some(dep => dep.name === depName) &&
      dependencies.some(dep => dep.newVersion === newVersion)
    ) {
      const dep = dependencies.find(dep => dep.name === depName);
      if (!dep) continue;

      // Add project to existing dependency
      dep.projects.push(projectName);

      // Update the element in the array
      const index = dependencies.findIndex(dep => dep.name === depName);

      dependencies[Number(index)] = dep;
    } else {
      dependencies.push({ name: depName, newVersion, projects: [projectName] });
    }
  }
};

for (const { file } of packageJsonFiles) {
  const { stdout: newDepsJson } = await exec(`git show HEAD:${file}`);
  // Get old dependencies from git history
  const { stdout: oldDepsJson } = await exec(`git show HEAD~1:${file}`);
  const {
    name: projectName,
    dependencies: oldDeps = {},
    devDependencies: oldDevDeps = {},
  } = JSON.parse(oldDepsJson);
  const { dependencies: newDeps = {}, devDependencies: newDevDeps = {} } = JSON.parse(newDepsJson);

  getChangedDependencies(projectName, newDeps, oldDeps);
  getChangedDependencies(projectName, newDevDeps, oldDevDeps);
}

// Create changeset
async function createChangeset(fileName: string, packageBumps: string[][], packages: string[]) {
  let message = '';
  for (const [pkg, bump] of packageBumps) {
    message = message + `Updated dependency \`${pkg}\` to \`${bump}\`.\n`;
  }

  const pkgs = packages.map((pkg: string) => `'${pkg}': patch`).join('\n');
  const body = `---\n${pkgs}\n---\n\n${message.trim()}\n`;

  await fs.writeFile(fileName, body);
}

const addedFiles: string[] = [];

// Create changeset for each changed dependency
for (const { name, newVersion, projects } of dependencies) {
  const safeName = name.replaceAll(/[^\w-]/g, '_').toLowerCase();
  const fileName = `.changeset/${safeName}-${newVersion}.md`;

  if (addedFiles.includes(fileName)) continue;

  addedFiles.push(fileName);

  const packageBumps = [[name, newVersion]];
  const packages = projects;

  await createChangeset(fileName, packageBumps, packages);
}

// Add changeset files to git
for (const fileName of addedFiles) await exec('git add ' + fileName);

// Commit changeset
await exec('git commit -C HEAD --amend --no-edit');

// Push changeset
await exec('git push --force');
