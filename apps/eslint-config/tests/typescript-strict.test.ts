import { describe } from 'vitest';

import config from '../src/typescript-strict';
import { checkLintingErrorsFromFile, checkValidity, createEngine } from './utils';

describe('Typescript Strict Configuration', () => {
  const engine = createEngine({
    ...config,
    parserOptions: {
      project: './tsconfig.json',
    },
  });

  checkValidity(engine);
  checkLintingErrorsFromFile(engine, './tests/examples/example-1.ts');
});
