import merge from 'deepmerge';

import defaultConfig from './default';
import strictCodeStyleConfig from './sub-rules/prettier';
import strictTypescriptConfig from './sub-rules/strict-typescript';

const config = merge(strictCodeStyleConfig, strictTypescriptConfig);

export default merge(defaultConfig, config);
