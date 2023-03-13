import prettier from 'prettier';
import { describe, expect, it } from 'vitest';

import config from '../index.json';

describe('Prettier Config', () => {
  it('is valid configuration', () => {
    // Format the code with Prettier
    const code = prettier.format(
      'const foo=1',
      Object.assign(config as prettier.Options, {
        parser: 'typescript',
      }) as prettier.Options,
    );

    // Ensure it matches the expected formatting
    expect(code).toBe(`const foo = 1;
`);
  });
});
