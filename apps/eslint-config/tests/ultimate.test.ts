import { describe } from 'vitest';

import config from '../src/ultimate';
import { checkLintingErrorsFromFile, checkValidity, createEngine } from './utils';

describe('Ultimate Configuration', () => {
  const engine = createEngine({
    ...config,
    parserOptions: {
      project: './tsconfig.json',
    },
  });

  // Check the engine's configuration.
  checkValidity(engine);

  // Check the engine's linting errors.
  checkLintingErrorsFromFile(engine, './tests/examples/example-1.ts');
});
