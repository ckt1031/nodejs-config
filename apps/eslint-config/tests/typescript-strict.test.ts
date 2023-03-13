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

  // check that the engine is valid
  checkValidity(engine);

  // check that there are no linting errors in the file
  checkLintingErrorsFromFile(engine, './tests/examples/example-1.ts');
});
