import React from 'react';
import { useClasses, ClassRef } from 'treat';
import { Reset, ResetProps } from '../Reset/Reset';
import {
  Spacing,
  HorizontalSpacing,
  BorderRadius,
  BackgroundColor,
  Display,
  FlexDirection,
  BoxShadow,
  Transition,
  Width,
} from '../../themes/theme';
import * as styles from './Box.treat';

type VerticalPadding = Spacing | 'standardTouchableText';

function getResponsiveClassRefs<AtomName extends string>(
  defaultStyles: Record<AtomName, ClassRef>,
  desktopStyles: Record<AtomName, ClassRef>,
  propValue: ResponsiveProp<AtomName>,
) {
  if (typeof propValue === 'string') {
    return defaultStyles[propValue];
  } else if (propValue instanceof Array) {
    return propValue[0] !== propValue[1]
      ? [defaultStyles[propValue[0]], desktopStyles[propValue[1]]]
      : defaultStyles[propValue[0]];
  }
}

type ResponsiveProp<AtomName> = AtomName | [AtomName, AtomName];

export interface BoxProps extends ResetProps {
  paddingTop?: ResponsiveProp<VerticalPadding>;
  paddingBottom?: ResponsiveProp<VerticalPadding>;
  paddingLeft?: ResponsiveProp<HorizontalSpacing>;
  paddingRight?: ResponsiveProp<HorizontalSpacing>;
  marginTop?: ResponsiveProp<Spacing>;
  marginBottom?: ResponsiveProp<Spacing>;
  marginLeft?: ResponsiveProp<HorizontalSpacing>;
  marginRight?: ResponsiveProp<HorizontalSpacing>;
  display?: ResponsiveProp<Display>;
  flexDirection?: ResponsiveProp<FlexDirection>;
  borderRadius?: BorderRadius;
  backgroundColor?: BackgroundColor;
  boxShadow?: BoxShadow;
  transition?: Transition;
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
  width,
  className,
  ...restProps
}: BoxProps) => {
  return (
    <Reset
      className={useClasses(
        className,
        styles.backgroundColors[backgroundColor!],
        styles.boxShadow[boxShadow!],
        styles.borderRadius[borderRadius!],
        styles.transition[transition!],
        styles.width[width!],
        marginTop &&
          getResponsiveClassRefs(
            styles.marginTop.main,
            styles.marginTop.desktop,
            marginTop,
          ),
        marginRight &&
          getResponsiveClassRefs(
            styles.marginRight.main,
            styles.marginRight.desktop,
            marginRight,
          ),
        marginBottom &&
          getResponsiveClassRefs(
            styles.marginBottom.main,
            styles.marginBottom.desktop,
            marginBottom,
          ),
        marginLeft &&
          getResponsiveClassRefs(
            styles.marginLeft.main,
            styles.marginLeft.desktop,
            marginLeft,
          ),
        paddingTop &&
          getResponsiveClassRefs(
            styles.paddingTop.main,
            styles.paddingTop.desktop,
            paddingTop,
          ),
        paddingRight &&
          getResponsiveClassRefs(
            styles.paddingRight.main,
            styles.paddingRight.desktop,
            paddingRight,
          ),
        paddingBottom &&
          getResponsiveClassRefs(
            styles.paddingBottom.main,
            styles.paddingBottom.desktop,
            paddingBottom,
          ),
        paddingLeft &&
          getResponsiveClassRefs(
            styles.paddingLeft.main,
            styles.paddingLeft.desktop,
            paddingLeft,
          ),
        display &&
          getResponsiveClassRefs(
            styles.display,
            styles.displayDesktop,
            display,
          ),
        flexDirection &&
          getResponsiveClassRefs(
            styles.flexDirection,
            styles.flexDirectionDesktop,
            flexDirection,
          ),
      )}
      {...restProps}
    />
  );
};
