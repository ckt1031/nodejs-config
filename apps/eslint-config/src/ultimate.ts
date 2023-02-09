import merge from 'deepmerge';

import defaultConfig from './default';
import strictCodeStyleConfig from './code-style';
import strictTypescriptConfig from './default';

const config = merge(strictCodeStyleConfig, strictTypescriptConfig);

export default merge(defaultConfig, config);
