import React, { ReactNode } from 'react';
import { useClasses } from 'treat';
import { Box, BoxProps } from '../Box/Box';
import { HeadingSize, FontWeight, Tokens } from '../../themes/theme';
import { useTheme } from '../private/ThemeContext';
import styles from '../Text/Text.treat';

type HeadingLevel = '1' | '2' | '3';
type HeadingWeight = 'regular' | 'weak';
type Transform = 'standard' | 'large' | 'level1' | 'level2' | 'level3';

interface HeadingOptions {
  fontSize: HeadingSize;
  transform: Transform;
  fontWeight: FontWeight;
  component: Exclude<BoxProps['component'], undefined>;
}
const resolveHeadingOptions = (
  level: HeadingLevel,
  weight: HeadingWeight,
  tokens: Tokens,
  component: BoxProps['component'],
): HeadingOptions => {
  if (level === '1') {
    return {
      fontSize: 'level1',
      transform: 'level1',
      fontWeight: tokens.heading.level1[weight],
      component: component || 'h1',
    };
  }
  if (level === '2') {
    return {
      fontSize: 'level2',
      transform: 'level2',
      fontWeight: tokens.heading.level2[weight],
      component: component || 'h2',
    };
  }
  if (level === '3') {
    return {
      fontSize: 'level3',
      transform: 'level3',
      fontWeight: tokens.heading.level3[weight],
      component: component || 'h3',
    };
  }
  throw new Error('No valid heading level provided');
};

export interface HeadingProps {
  children: ReactNode;
  level: HeadingLevel;
  weight?: HeadingWeight;
  component?: BoxProps['component'];
}

export const Heading = ({
  level,
  weight = 'regular',
  component,
  children,
}: HeadingProps) => {
  const theme = useTheme();
  const {
    transform,
    fontSize,
    fontWeight,
    component: resolvedComponent,
  } = resolveHeadingOptions(level, weight, theme.tokens, component);

  return (
    <Box
      component={resolvedComponent}
      paddingBottom={level === '1' ? 'small' : 'xsmall'}
      className={useClasses(
        styles.fontFamily,
        styles.colors.neutral,
        styles.fontSize[fontSize],
        styles.fontWeight[fontWeight],
        styles.transform[transform],
      )}
    >
      {children}
    </Box>
  );
};
