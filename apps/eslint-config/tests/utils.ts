import { ESLint, Linter } from 'eslint';
import { expect, it } from 'vitest';

// Create an ESLint engine, based on a base config.
export const createEngine = (baseConfig: Linter.Config) => {
  return new ESLint({
    useEslintrc: false, // do not use .eslintrc.* files
    baseConfig, // set the base config
  });
};

export const checkValidity = (engine: ESLint) => {
  it('is valid configuration', async () => {
    // Linting an empty string is invalid, so we expect it to throw
    await expect(engine.lintText('')).resolves.not.toThrow();
  });
};

// This test ensures that the linting engine is properly configured.
export const checkLintingErrors = (engine: ESLint) => {
  it('does not produce linting errors', async () => {
    // Run linting on an empty string.
    const lintResults = await engine.lintText('');

    // Expect that the linting engine does not produce any errors.
    expect(lintResults[0].errorCount).toBe(0);
  });
};

export const checkLintingErrorsFromFile = (engine: ESLint, file: string) => {
  it('does not produce linting errors', async () => {
    // Lint the file using the ESLint engine
    const lintResults = await engine.lintFiles(file);

    // Expect that the file has no errors
    expect(lintResults[0].errorCount).toBe(0);
  });
};
