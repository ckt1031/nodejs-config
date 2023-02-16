import { describe } from 'vitest';

import config from '../src/default';
import { checkLintingErrors, checkValidity, createEngine } from './utils';

describe('Default Configuration', () => {
  const engine = createEngine(config);

  checkValidity(engine);
  checkLintingErrors(engine);
});
