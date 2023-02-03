const fs = require('node:fs');
const path = require('node:path');

const rollupPluginCommonjs = require('@rollup/plugin-commonjs');
const rollupPluginNodeResolve = require('@rollup/plugin-node-resolve');
const rollupPluginTypescript = require('@rollup/plugin-typescript');
const rollupPluginAutoExternal = require('rollup-plugin-auto-external');

const configDir = './src/';

const configFiles = fs.readdirSync(configDir).filter(file => file.endsWith('.ts'));

const common = {
  output: {
    dir: './dist',
    exports: 'default',
  },
};

const plugins = [
  rollupPluginAutoExternal(),
  rollupPluginNodeResolve(),
  rollupPluginCommonjs(),
  rollupPluginTypescript({
    tsconfig: 'tsconfig.json',
  }),
];

function getCjsConfig(filename) {
  return {
    ...common,
    input: `${configDir}${filename}`,
    output: {
      ...common.output,
      entryFileNames: `${path.basename(filename, '.ts')}.cjs`,
      format: 'cjs',
    },
    plugins,
  };
}

function getEsmConfig(filename) {
  return {
    ...common,
    input: `${configDir}${filename}`,
    output: {
      ...common.output,
      entryFileNames: `${path.basename(filename, '.ts')}.mjs`,
      format: 'esm',
    },
    plugins,
  };
}

function getEntryConfigs(filename) {
  return [getCjsConfig(filename), getEsmConfig(filename)];
}

module.exports = configFiles.flatMap(element => getEntryConfigs(element));
