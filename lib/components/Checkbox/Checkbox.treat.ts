import { css, select } from 'treat';

import getCheckboxRadioSize from '../private/getCheckboxRadioSize';
import { px } from './../../atoms/utils/toUnit';

const styles = css(theme => {
  const checkboxSize = getCheckboxRadioSize(theme);

  return {
    content: {},
    checkboxContainer: {
      position: 'relative' as 'relative',
      width: px(checkboxSize),
      height: px(checkboxSize),
      marginTop: px((theme.touchableRows * theme.rowHeight - checkboxSize) / 2),
      flexShrink: 0,
      padding: '4px',
      fdsa: '',
    },
    children: { marginLeft: px(checkboxSize), display: 'none' },
    realCheckbox: {
      opacity: 0,
      position: 'absolute' as 'absolute',
      height: 0,
      width: 0,
    },
    label: {
      display: 'flex',
    },
    checkbox: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    checkboxHover: {
      opacity: 0,
      zIndex: 1,
    },
    checkboxFocus: {
      opacity: 0,
      zIndex: 1,
    },
    checkboxDisabled: {
      opacity: 0,
      zIndex: 2,
    },
    checkboxChecked: {
      opacity: 0,
      zIndex: 3,
    },
    checkboxCritical: {
      zIndex: 4,
    },
    checkboxIcon: {
      opacity: 0,
      transform: 'scale(0.7)',
      position: 'relative' as 'relative',
      zIndex: 5,
      // IE11:
      height: '100%',
    },
  };
});

const {
  realCheckbox,
  content,
  checkboxFocus,
  checkboxChecked,
  checkboxDisabled,
  checkboxIcon,
  children,
  label,
  checkboxHover,
} = styles;

select`${realCheckbox}:not(:disabled) ~ ${content} ${label}`({
  cursor: 'pointer',
});

select`${realCheckbox}:not(:disabled) ~ ${content} ${label}:hover > * > ${checkboxHover}`(
  {
    opacity: 1,
  },
);

select`${realCheckbox}:focus ~ ${content} > * > * > ${checkboxFocus}`({
  opacity: 1,
});

select`${realCheckbox}:checked ~ ${content} > * > * > ${checkboxChecked}`({
  opacity: 1,
});

select`${realCheckbox}:disabled ~ ${content} > * > * > ${checkboxDisabled}`({
  opacity: 1,
});

select`${realCheckbox}:checked ~ ${content} > * > * > ${checkboxIcon}`({
  transform: 'none',
  opacity: 1,
});
select`${realCheckbox}:checked ~ ${content} > ${children}`({
  display: 'block',
});

export default styles;
