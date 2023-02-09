import merge from 'deepmerge';

import defaultConfig from './default';
import strictTypescriptConfig from './sub-rules/strict-typescript';

export default merge(defaultConfig, strictTypescriptConfig);
