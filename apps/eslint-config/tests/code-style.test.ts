import { describe } from 'vitest';

import config from '../src/code-style';
import { checkLintingErrors, checkValidity, createEngine } from './utils';

describe('Code Style Configuration', () => {
  const engine = createEngine(config);

  // Check the validity of the engine.
  checkValidity(engine);

  // Check for any linting errors.
  checkLintingErrors(engine);
});
