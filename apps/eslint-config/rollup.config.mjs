import fs from 'node:fs';
import path from 'node:path';

import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import rollupPluginTypescript from '@rollup/plugin-typescript';
import rollupPluginAutoExternal from 'rollup-plugin-auto-external';

// Read the files in the src directory
const dir = './src/';
// Filter the .ts files
const files = fs.readdirSync(dir).filter(file => file.endsWith('.ts'));

const plugins = [
  // Automatically mark all dependencies as external
  rollupPluginAutoExternal(),
  // Resolve node modules
  rollupPluginNodeResolve(),
  // Convert CommonJS modules to ES6
  rollupPluginCommonjs(),
  // Compile TypeScript files
  rollupPluginTypescript({
    tsconfig: 'tsconfig.json',
  }),
];

/**
 * @typedef {import('rollup').RollupOptions} RollupOptions
 * @typedef {import('rollup').OutputOptions} OutputOptions
 * @typedef {import('rollup').Plugin} Plugin
 */

/**
 * @typedef {Object} ParticularFormatConfig
 * @property {string} input
 * @property {OutputOptions} output
 * @property {Array<Plugin>} plugins
 */

/**
 * Generates the Rollup configuration for CJS (CommonJS) builds.
 *
 * @param {string} filename - The name of the input TypeScript file.
 * @returns {ParticularFormatConfig} The Rollup configuration for CJS builds.
 */
function getCjsConfig(filename) {
  return {
    input: `${dir}${filename}`,
    output: {
      dir: './dist',
      exports: 'default',
      entryFileNames: `${path.basename(filename, '.ts')}.cjs`,
      format: 'cjs',
    },
    plugins,
  };
}

/**
 * Generates the Rollup configuration for CJS (CommonJS) builds.
 *
 * @param {string} filename - The name of the input TypeScript file.
 * @returns {ParticularFormatConfig} The Rollup configuration for CJS builds.
 */
function getEsmConfig(filename) {
  return {
    input: `${dir}${filename}`,
    output: {
      dir: './dist',
      exports: 'default',
      entryFileNames: `${path.basename(filename, '.ts')}.mjs`,
      format: 'esm',
    },
    plugins,
  };
}

/**
 * Generates the Rollup configuration for CJS (CommonJS) and ESM (ECMAScript Module) builds.
 * @param {string} filename - The name of the input TypeScript file.
 * @returns {Array<ParticularFormatConfig>} The Rollup configuration for CJS and ESM builds.
 */
function getEntryConfigs(filename) {
  return [getCjsConfig(filename), getEsmConfig(filename)];
}

export default files.flatMap(element => getEntryConfigs(element));
