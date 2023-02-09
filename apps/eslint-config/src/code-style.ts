import merge from 'deepmerge';

import defaultConfig from './default';
import strictCodeStyleConfig from './sub-rules/prettier';

export default merge(defaultConfig, strictCodeStyleConfig);
