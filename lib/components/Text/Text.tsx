import React, { ReactNode } from 'react';
import { useClasses, ClassRef } from 'treat';
import { Color, FontWeight } from '../../themes/theme';
import { Box, BoxProps } from '../Box/Box';
import styles from './Text.treat';

type TextSize = 'standard' | 'large';

const resolveTransformAtom = (
  size: TextSize,
  baseline: boolean,
): ClassRef | null => {
  if (!baseline) {
    return null;
  }
  if (size === 'standard') {
    return styles.transform.standard;
  }
  if (size === 'large') {
    return styles.transform.large;
  }
  throw new Error('No valid text size provided');
};

export interface TextProps extends Pick<BoxProps, 'component'> {
  children?: ReactNode;
  size?: TextSize;
  color?: Color;
  weight?: FontWeight;
  baseline?: boolean;
}

export const Text = ({
  component,
  size = 'standard',
  color,
  weight,
  baseline = true,
  children,
}: TextProps) => (
  <Box
    component={component}
    className={useClasses(
      styles.block,
      styles.fontFamily,
      styles.colors[color || 'neutral'],
      styles.fontSize[size],
      styles.fontWeight[weight || 'regular'],
      resolveTransformAtom(size, baseline),
      typeof component === 'string' && /^li$/i.test(component)
        ? styles.listItem
        : null,
    )}
  >
    {children}
  </Box>
);
