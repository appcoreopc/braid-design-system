import { px } from './toUnit';
import { Tokens } from '../../themes/theme';

type ColumnSpaceProperty =
  | 'marginLeft'
  | 'marginRight'
  | 'paddingLeft'
  | 'paddingRight';

type ColumnSpaceRule = { [property in ColumnSpaceProperty]?: string };

type ColumnSpaceVariants = keyof Tokens['columnSpacing'];

type ColumnRuleVariants = ColumnSpaceVariants | 'none';

type ColumnSpacingRules = { [name in ColumnRuleVariants]: ColumnSpaceRule };

type ruleNames = [];

export default (
  propertyName: ColumnSpaceProperty,
  { columnWidth, columnSpacing }: Tokens
): ColumnSpacingRules => {
  const makeSpaceRule = (variation: ColumnSpaceVariants) => ({
    [propertyName]: px(columnSpacing[variation] * columnWidth)
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
    xxlarge: makeSpaceRule('xxlarge'),
    gutter: makeSpaceRule('gutter')
  };
};
