import { style, css } from 'sku/treat';
import { Theme } from 'treat/theme';
import basekick from 'basekick';
import { Breakpoint } from '../../themes/theme';

export const fontFamily = style(({ typography }) => ({
  fontFamily: typography.fontFamily,
}));

export const fontWeight = css(({ typography }) => ({
  regular: {
    fontWeight: typography.fontWeight.regular,
  },
  medium: {
    fontWeight: typography.fontWeight.medium,
  },
  strong: {
    fontWeight: typography.fontWeight.strong,
  },
}));

interface TextDefinition {
  rows: number;
  size: number;
}

const alignTextToGrid = (
  textDefinition: TextDefinition,
  gridRowHeight: number,
  descenderHeightScale: number,
) =>
  basekick({
    baseFontSize: 1,
    typeSizeModifier: textDefinition.size,
    typeRowSpan: textDefinition.rows,
    gridRowHeight,
    descenderHeightScale,
  });

const makeTypographyRules = (
  textDefinition: Record<Breakpoint, TextDefinition>,
  { rowHeight, descenderHeightScale, utils }: Theme,
) => {
  const mobile = alignTextToGrid(
    textDefinition.mobile,
    rowHeight,
    descenderHeightScale,
  );

  const desktop = alignTextToGrid(
    textDefinition.desktop,
    rowHeight,
    descenderHeightScale,
  );

  return {
    fontSize: utils.responsiveStyles(
      {
        fontSize: mobile.fontSize,
        lineHeight: mobile.lineHeight,
      },
      {
        fontSize: desktop.fontSize,
        lineHeight: desktop.lineHeight,
      },
    ),
    transform: utils.responsiveStyles(
      {
        transform: mobile.transform,
      },
      {
        transform: desktop.transform,
      },
    ),
  };
};

export const text = {
  standard: css(theme => makeTypographyRules(theme.text.standard, theme)),
  large: css(theme => makeTypographyRules(theme.text.large, theme)),
};

export const heading = {
  '1': css(theme => makeTypographyRules(theme.heading.level1, theme)),
  '2': css(theme => makeTypographyRules(theme.heading.level2, theme)),
  '3': css(theme => makeTypographyRules(theme.heading.level3, theme)),
};
