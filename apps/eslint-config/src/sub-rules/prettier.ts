import { Linter } from 'eslint';

const strictCodeStyleConfig: Linter.Config = {
  // Create a strictCodeStyleConfig object of type Linter.Config.
  extends: ['prettier'], // Add the prettier package to the extends array.
  plugins: ['prettier'], // Add the prettier package to the plugins array.
  rules: {
    'prettier/prettier': 2, // Add a rule to enforce the prettier plugin.
  },
};

export default strictCodeStyleConfig; // Export the strictCodeStyleConfig object as the default export.
