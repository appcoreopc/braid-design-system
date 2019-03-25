import { css, style, StaticRuleset } from 'treat';
import basekick from 'basekick';
import { isLight, makeDesktopRule } from './../../utils/stylesUtils';
import { Breakpoint } from '../../themes/theme';
import { Theme } from 'treat/theme';

interface TextDefinition {
  rows: number;
  size: number;
}

const getFontBaseline = (
  textDefinition: Record<Breakpoint, TextDefinition>,
  theme: Theme,
) => {
  const { rowHeight, descenderHeightScale } = theme.tokens;

  const mobile = basekick({
    baseFontSize: 1,
    typeSizeModifier: textDefinition['mobile'].size,
    typeRowSpan: textDefinition['mobile'].rows,
    gridRowHeight: rowHeight,
    descenderHeightScale: descenderHeightScale,
  });

  const desktop = basekick({
    baseFontSize: 1,
    typeSizeModifier: textDefinition['mobile'].size,
    typeRowSpan: textDefinition['mobile'].rows,
    gridRowHeight: rowHeight,
    descenderHeightScale: descenderHeightScale,
  });

  return {
    mobile,
    desktop,
  };
};

const makeFontSizeRules = (
  textDefinition: Record<Breakpoint, TextDefinition>,
  theme: Theme,
): StaticRuleset => {
  const { mobile, desktop } = getFontBaseline(textDefinition, theme);

  return {
    fontSize: mobile.fontSize,
    lineHeight: mobile.lineHeight,
    ...makeDesktopRule(theme, {
      fontSize: desktop.fontSize,
      lineHeight: desktop.lineHeight,
    }),
  };
};

const makeFontTransformRules = (
  textDefinition: Record<Breakpoint, TextDefinition>,
  theme: Theme,
): StaticRuleset => {
  const { mobile, desktop } = getFontBaseline(textDefinition, theme);

  return {
    transform: mobile.transform,
    ...makeDesktopRule(theme, {
      transform: desktop.transform,
    }),
  };
};

const fontSize = css(theme => ({
  standard: makeFontSizeRules(theme.tokens.text.standard, theme),
  large: makeFontSizeRules(theme.tokens.text.large, theme),
  level1: makeFontSizeRules(theme.tokens.heading.level1, theme),
  level2: makeFontSizeRules(theme.tokens.heading.level2, theme),
  level3: makeFontSizeRules(theme.tokens.heading.level3, theme),
}));

const transform = css(theme => ({
  standard: makeFontTransformRules(theme.tokens.text.standard, theme),
  large: makeFontTransformRules(theme.tokens.text.large, theme),
  level1: makeFontTransformRules(theme.tokens.heading.level1, theme),
  level2: makeFontTransformRules(theme.tokens.heading.level2, theme),
  level3: makeFontTransformRules(theme.tokens.heading.level3, theme),
}));

const colors = css(theme => {
  const {
    link,
    linkHover,
    black,
    white,
    critical,
    positive,
    secondary,
    formAccent,
    brandAccent,
    neutral,
  } = theme.color;

  return {
    link: {
      color: link,
      selectors: {
        '&:hover,&:focus': linkHover
          ? {
              color: linkHover,
            }
          : {},
      },
    },
    black: { color: black },
    white: { color: white },
    critical: { color: critical },
    positive: { color: positive },
    secondary: { color: secondary },
    formAccent: { color: formAccent },
    brandAccentForeground: {
      color: isLight(brandAccent) ? black : white,
    },
    neutral: { color: neutral },
  };
});

const fontFamily = style(theme => ({
  fontFamily: theme.fontFamily.fontFamily,
}));

const fontWeight = css(theme => ({
  regular: { fontWeight: theme.fontWeight.regular },
  medium: { fontWeight: theme.fontWeight.medium },
  strong: { fontWeight: theme.fontWeight.strong },
}));

const mainStyles = css({
  block: {
    display: 'block',
  },
  listItem: {
    display: 'list-item',
    listStyle: 'disc',
    marginLeft: '1.3em',
  },
});

export default {
  ...mainStyles,
  colors,
  fontFamily,
  fontWeight,
  fontSize,
  transform,
};
