import prettier from 'prettier';
import { describe, expect, it } from 'vitest';

import config from '../index.json';

describe('Prettier Config', () => {
  it('is valid configuration', async () => {
    // Format the code with Prettier
    const code = await prettier.format(
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
