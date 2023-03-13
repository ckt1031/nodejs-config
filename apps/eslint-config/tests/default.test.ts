import { describe } from 'vitest';

import config from '../src/default';
import { checkLintingErrors, checkValidity, createEngine } from './utils';

describe('Default Configuration', () => {
  const engine = createEngine(config);

  // Check if the script is valid
  checkValidity(engine);

  // Check if the script has any linting errors
  checkLintingErrors(engine);
});
