import merge from 'lodash/merge';
import partition from 'lodash/partition';
import pick from 'lodash/pick';

import { Tokens } from '../themes/theme';
import { Css } from './types';

import makeColors, { ColorParams } from './color/makeColors';
import makeDisplayRules from './makeDisplayRules';
import makeFontWeight, { FontWeightParams } from './font/makeFontWeights';
import makeFontFamily, { FontFamilyParams } from './font/makeFontFamily';
import makeBackgroundColors, {
  BackgroundColorParams,
} from './color/makeBackgroundColors';
import makeBoxShadows, { BoxShadowParams } from './makeBoxShadows';
import makePadding from './makePadding';
import makeMargins from './makeMargins';
import makeTransforms, { TransformParams } from './makeTransforms';
import makeFlexDirections from './makeFlexDirections';
import makeFontSizes from './font/makeFontSizes';

const makeAtoms = (
  tokens: Tokens,
  colors: ColorParams,
  fontFamily: FontFamilyParams,
  boxShadows: BoxShadowParams,
  fontWeights: FontWeightParams,
  backgroundColor: BackgroundColorParams,
  transforms: TransformParams,
): Css => {
  const rules = merge(
    makeFontSizes(tokens),
    makeBackgroundColors(backgroundColor),
    makeBoxShadows(tokens, boxShadows),
    makeColors(colors),
    makeFontFamily(fontFamily),
    makeFontWeight(fontWeights),
    makeMargins(tokens),
    makePadding(tokens),
    makeDisplayRules(tokens),
    makeTransforms(tokens, transforms),
    makeFlexDirections(tokens),
  );

  const [queryRules, regularRules] = partition(Object.keys(rules), ruleName =>
    ruleName.startsWith('@'),
  );

  // Include media queries last to ensure higher specificity
  return {
    ...pick(rules, regularRules),
    ...pick(rules, queryRules),
  };
};

export default makeAtoms;
