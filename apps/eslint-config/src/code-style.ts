import merge from 'deepmerge';
import type { Linter } from 'eslint';

import defaultConfig from './default';

export const strictCodeStyleConfig: Linter.Config = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 2,
  },
};

export default merge(defaultConfig, strictCodeStyleConfig);
