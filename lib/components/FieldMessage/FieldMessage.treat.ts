import { css, style } from 'treat';
import { px } from '../../utils/stylesUtils';

export const messageContainer = style(theme => ({
  flexGrow: 1,
  minHeight: px(
    theme.tokens.text.standard.mobile.rows * theme.tokens.rowHeight,
  ),
}));

const standardStyles = css({
  root: {
    justifyContent: 'flex-end',
  },

  fixedSize: {
    flexShrink: 0,
    flexGrow: 0,
  },
});

export default {
  ...standardStyles,
  messageContainer,
};
