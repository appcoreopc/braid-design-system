import React, { Component, ReactNode, ReactType } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import styles from './Heading.css.js';
import Box from '../Box/Box';
import {
  ColorVariants,
  HeadingSize,
  HeadingFontWeightVariants,
  TransformVariants
} from '../../themes/theme';

export interface Props {
  component?: ReactType;
  size?: HeadingSize;
  color?: ColorVariants;
  weight?: HeadingFontWeightVariants;
  baseline?: boolean;
  className?: string;
  children: ReactNode;
}

const isTransformVariant = (
  atom: Record<TransformVariants, string>,
  transformSize: string
): transformSize is TransformVariants =>
  Object.keys(atom).indexOf(transformSize) > -1;

const DEFAULT_HEADING_SIZE = 'level1';

export default (
  class Heading extends Component<Props> {
    static displayName = 'Heading';

    render() {
      return (
        <ThemeConsumer>
          { theme => {
            const {
              component,
              size,
              color,
              weight,
              baseline = true,
              className = '',
              ...restProps
            } = this.props;
            const fontSize = size || DEFAULT_HEADING_SIZE;

            const transformSize = `${fontSize}Text`;
            
            // Heading FontWeight is either regular or weak.
            // So we remap to the original FontWeightVarients from there.
            const fontWeight = weight === 'weak' ? 'regular' : 'strong';
            
            const baselineTransform =
            isTransformVariant(theme.atoms.transform, transformSize) && baseline
              ? theme.atoms.transform[transformSize]
              : '';
              
              return (
                <Box
                component={component}
                className={classnames(
                  className,
                  styles.block,
                  theme.atoms.fontFamily.text,
                  theme.atoms.color[color || 'neutral'],
                  theme.atoms.fontSize[fontSize],
                  theme.atoms.fontWeight[fontWeight],
                  baselineTransform,
                  {
                    [styles.listItem]:
                      typeof component === 'string' && /^li$/i.test(component)
                  }
                )}
                {...restProps}
              />
              );
          }}
          </ThemeConsumer>
      );
    }
  }
);