import { ESLint, Linter } from 'eslint';
import { expect, it } from 'vitest';

export const createEngine = (baseConfig: Linter.Config) => {
  return new ESLint({
    useEslintrc: false,
    baseConfig,
  });
};

export const checkValidity = (engine: ESLint) => {
  it('is valid configuration', () => {
    expect(async () => {
      await engine.lintText('');
    }).not.toThrow();
  });
};

export const checkLintingErrors = (engine: ESLint) => {
  it('does not produce linting errors', async () => {
    const lintResults = await engine.lintText('');

    expect(lintResults[0].errorCount).toBe(0);
  });
};

export const checkLintingErrorsFromFile = (engine: ESLint, file: string) => {
  it('does not produce linting errors', async () => {
    const lintResults = await engine.lintFiles(file);

    expect(lintResults[0].errorCount).toBe(0);
  });
};
