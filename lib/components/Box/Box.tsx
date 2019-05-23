import React from 'react';
import { Reset, ResetProps } from '../Reset/Reset';
import {
  HorizontalSpacing,
  VerticalPadding,
  Spacing,
  BackgroundColor,
  BoxShadow,
} from '../../themes/theme';
import { ContrastProvider } from './ContrastContext';
import useBox, { ResponsiveProp } from '../../hooks/useBox';

export interface BoxProps extends ResetProps {
  paddingTop?: ResponsiveProp<VerticalPadding>;
  paddingBottom?: ResponsiveProp<VerticalPadding>;
  paddingLeft?: ResponsiveProp<HorizontalSpacing>;
  paddingRight?: ResponsiveProp<HorizontalSpacing>;
  marginTop?: ResponsiveProp<Spacing>;
  marginBottom?: ResponsiveProp<Spacing>;
  marginLeft?: ResponsiveProp<HorizontalSpacing>;
  marginRight?: ResponsiveProp<HorizontalSpacing>;
  display?: ResponsiveProp<
    'block' | 'inline' | 'none' | 'inlineBlock' | 'flex'
  >;
  flexDirection?: ResponsiveProp<'row' | 'column'>;
  borderRadius?: 'standard';
  backgroundColor?: BackgroundColor;
  boxShadow?: BoxShadow;
  transform?: 'touchable';
  transition?: 'fast' | 'touchable';
  width?: 'full';
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
  width,
  className,
  ...restProps
}: BoxProps) => {
  const boxStyles = useBox({
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
    width,
  });

  const ResetBox = (
    <Reset
      className={`${className ? `${className} ` : ''}${boxStyles}`}
      {...restProps}
    />
  );

  return backgroundColor ? (
    <ContrastProvider value={backgroundColor}>{ResetBox}</ContrastProvider>
  ) : (
    ResetBox
  );
};
