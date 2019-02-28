import { Tokens } from '../../themes/theme';

import { px } from '../utils/toUnit';

export default (tokens: Tokens) => ({
  '.borderWidth_standard': {
    borderStyle: 'solid',
    borderWidth: px(tokens.borderWidth.standard)
  }
});
