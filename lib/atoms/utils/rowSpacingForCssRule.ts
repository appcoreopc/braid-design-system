import { px } from './toUnit';
import { Tokens } from '../../themes/theme';

type RowSpaceProperty =
  | 'marginTop'
  | 'marginBottom'
  | 'paddingTop'
  | 'paddingBottom';

type RowSpaceRule = { [property in RowSpaceProperty]?: string };

type RowSpaceVariants = keyof Tokens['rowSpacing'];

type RowRuleVariants = RowSpaceVariants | 'none';

type RowSpacingRules = { [name in RowRuleVariants]: RowSpaceRule };

export default (
  propertyName: RowSpaceProperty,
  { rowHeight, rowSpacing }: Tokens
): RowSpacingRules => {
  const makeSpaceRule = (variation: RowSpaceVariants) => ({
    [propertyName]: px(rowSpacing[variation] * rowHeight)
  });

  return {
    none: {
      [propertyName]: 'none'
    },
    xxsmall: makeSpaceRule('xxsmall'),
    xsmall: makeSpaceRule('xsmall'),
    small: makeSpaceRule('small'),
    medium: makeSpaceRule('medium'),
    large: makeSpaceRule('large'),
    xlarge: makeSpaceRule('xlarge'),
    xxlarge: makeSpaceRule('xxlarge')
  };
};
