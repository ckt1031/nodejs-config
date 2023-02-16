import prettier from 'prettier';
import { describe, expect, it } from 'vitest';

import config from '../index.json';

describe('Prettier Config', () => {
  it('is valid configuration', () => {
    const code = prettier.format(
      'const foo=1',
      Object.assign(config as prettier.Options, {
        parser: 'typescript',
      }),
    );

    expect(code).toBe(`const foo = 1;
`);
  });
});
