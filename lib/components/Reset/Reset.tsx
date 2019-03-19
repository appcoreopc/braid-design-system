import { createElement, ReactType, AllHTMLAttributes } from 'react';
import { useClasses } from 'treat';
import { baseReset, specificResets } from './Reset.treat';

export interface ResetProps extends AllHTMLAttributes<HTMLElement> {
  component?: ReactType;
}

export const Reset = ({
  component = 'div',
  className,
  ...restProps
}: ResetProps) =>
  createElement(component, {
    className: useClasses(
      className,
      baseReset,
      specificResets[component as keyof typeof specificResets],
    ),
    ...restProps,
  });
