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

  checkValidity(engine);
  checkLintingErrorsFromFile(engine, './tests/examples/example-1.ts');
});
