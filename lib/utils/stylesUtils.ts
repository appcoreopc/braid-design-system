import { getLuminance } from 'polished';
import { StaticRuleset } from 'treat';
import { Theme } from 'treat/theme';

export const desktop = (theme: Theme) =>
  `screen and (min-width: ${theme.tokens.responsiveBreakpoint}px)`;

export const makeDesktopRule = (theme: Theme, rule: StaticRuleset) => ({
  '@media': {
    [desktop(theme)]: rule,
  },
});

export const isLight = (color: string) => getLuminance(color) > 0.6;

export const px = (num: number) => `${num}${num !== 0 ? 'px' : ''}`;
