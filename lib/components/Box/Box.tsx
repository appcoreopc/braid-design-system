import React from 'react';
import { useClassNames, ClassRef } from 'treat';
import { useTheme } from '../private/ThemeContext';
import { Reset, ResetProps } from '../Reset/Reset';
import {
  HorizontalSpacing,
  VerticalPadding,
  Spacing,
  BorderRadius,
  BackgroundColor,
  Display,
  FlexDirection,
  BoxShadow,
  Transition,
  Transform,
  Width,
  IconSize,
} from '../../themes/theme';

import * as styles from './Box.treat';

function getResponsiveClasses<AtomName extends string>(
  atoms: Record<AtomName, string>,
  desktopAtoms: Record<AtomName, string>,
  propValue: ResponsiveProp<AtomName>,
) {
  if (typeof propValue === 'string') {
    return atoms[propValue!];
  } else if (propValue instanceof Array) {
    return propValue[0] !== propValue[1]
      ? `${atoms[propValue[0]!] || ''} ${desktopAtoms[propValue[1]!] || ''}`
      : atoms[propValue[0]!];
  }
}

interface ResponsiveStyle<StyleName extends string> {
  main: Record<StyleName, ClassRef>;
  desktop: Record<StyleName, ClassRef>;
}

function getResponsiveClassRefs<StyleName extends string>(
  styles: ResponsiveStyle<StyleName>,
  propValue: ResponsiveProp<StyleName> | undefined,
) {
  if (!propValue) {
    return;
  }

  if (typeof propValue === 'string') {
    return styles.main[propValue];
  }

  return propValue[0] !== propValue[1]
    ? [styles.main[propValue[0]], styles.desktop[propValue[1]]]
    : styles.main[propValue[0]];
}

type ResponsiveProp<AtomName> = AtomName | [AtomName, AtomName];

export interface BoxProps extends ResetProps {
  marginTop?: ResponsiveProp<Spacing>;
  marginBottom?: ResponsiveProp<Spacing>;
  marginLeft?: ResponsiveProp<HorizontalSpacing>;
  marginRight?: ResponsiveProp<HorizontalSpacing>;
  paddingTop?: ResponsiveProp<VerticalPadding>;
  paddingBottom?: ResponsiveProp<VerticalPadding>;
  paddingLeft?: ResponsiveProp<HorizontalSpacing>;
  paddingRight?: ResponsiveProp<HorizontalSpacing>;
  display?: ResponsiveProp<Display>;
  flexDirection?: ResponsiveProp<FlexDirection>;
  borderRadius?: BorderRadius;
  backgroundColor?: BackgroundColor;
  boxShadow?: BoxShadow;
  transform?: Transform;
  transition?: Transition;
  minHeight?: IconSize;
  width?: Width;
}

export const Box = ({
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  flexDirection,
  borderRadius,
  backgroundColor,
  boxShadow,
  transition,
  transform,
  minHeight,
  width,
  className,
  ...restProps
}: BoxProps) => {
  const { atoms } = useTheme();

  return (
    <Reset
      className={useClassNames(
        className,
        styles.backgroundColors[backgroundColor!],
        atoms.boxShadow[boxShadow!],
        atoms.borderRadius[borderRadius!],
        atoms.boxShadow[boxShadow!],
        atoms.transition[transition!],
        atoms.transform[transform!],
        atoms.minHeight[minHeight!],
        atoms.width[width!],
        getResponsiveClassRefs(styles.marginTop, marginTop),
        getResponsiveClassRefs(styles.marginRight, marginRight),
        getResponsiveClassRefs(styles.marginBottom, marginBottom),
        getResponsiveClassRefs(styles.marginLeft, marginLeft),
        paddingTop &&
          getResponsiveClasses(
            atoms.paddingTop,
            atoms.paddingTopDesktop,
            paddingTop,
          ),
        paddingRight &&
          getResponsiveClasses(
            atoms.paddingRight,
            atoms.paddingRightDesktop,
            paddingRight,
          ),
        paddingBottom &&
          getResponsiveClasses(
            atoms.paddingBottom,
            atoms.paddingBottomDesktop,
            paddingBottom,
          ),
        paddingLeft &&
          getResponsiveClasses(
            atoms.paddingLeft,
            atoms.paddingLeftDesktop,
            paddingLeft,
          ),
        display &&
          getResponsiveClasses(atoms.display, atoms.displayDesktop, display),
        flexDirection &&
          getResponsiveClasses(
            atoms.flexDirection,
            atoms.flexDirectionDesktop,
            flexDirection,
          ),
      )}
      {...restProps}
    />
  );
};
