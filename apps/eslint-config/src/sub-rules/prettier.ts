import { Linter } from 'eslint';

const strictCodeStyleConfig: Linter.Config = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 2,
  },
};

export default strictCodeStyleConfig;
