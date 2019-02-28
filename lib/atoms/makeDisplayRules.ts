import { Tokens } from '../themes/theme';
import createDesktopRules from './utils/makeDesktopRules';

export default (tokens: Tokens) => ({
  '.display_block': { display: 'block' },
  '.display_inline': { display: 'inline' },
  '.display_none': { display: 'none' },
  '.display_inlineBlock': { display: 'inline-block' },
  '.display_flex': { display: 'flex' },
  ...createDesktopRules({
    tokens,
    css: {
      '.displayDesktop_block': { display: 'block' },
      '.displayDesktop_inline': { display: 'inline' },
      '.displayDesktop_none': { display: 'none' },
      '.displayDesktop_inlineBlock': { display: 'inline-block' },
      '.displayDesktop_flex': { display: 'flex' }
    }
  })
});
