import React, { ReactNode, AllHTMLAttributes, Fragment } from 'react';
import { useClasses } from 'treat';
import { Box } from '../Box/Box';
import { FieldLabel } from '../FieldLabel/FieldLabel';
import { FieldMessage } from '../FieldMessage/FieldMessage';
import styles from './TextField.css.js';
import textStyles from '../Text/Text.treat';

const validTypes = {
  text: 'text',
  password: 'password',
  email: 'email',
  search: 'search',
  number: 'number',
  tel: 'tel',
  url: 'url',
};

type NativeInputProps = AllHTMLAttributes<HTMLInputElement>;
interface TextFieldProps {
  id: NonNullable<NativeInputProps['id']>;
  value: NonNullable<NativeInputProps['value']>;
  onChange: NonNullable<NativeInputProps['onChange']>;
  onBlur?: NativeInputProps['onBlur'];
  onFocus?: NativeInputProps['onFocus'];
  label?: string;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
  placeholder?: string;
  message?: ReactNode | false;
  tone?: 'neutral' | 'critical' | 'positive';
  type?: keyof typeof validTypes;
}

export const TextField = ({
  id,
  label,
  secondaryLabel,
  tertiaryLabel,
  placeholder,
  message,
  tone = 'neutral',
  value,
  type = 'text',
  onChange,
  onBlur,
  onFocus,
}: TextFieldProps) => {
  const messageId = `${id}-message`;

  return (
    <Fragment>
      <FieldLabel
        id={id}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      <Box className={styles.root}>
        <Box
          component="input"
          type={validTypes[type]}
          id={id}
          backgroundColor="input"
          boxShadow={tone === 'critical' ? 'borderCritical' : 'borderStandard'}
          width="full"
          paddingLeft="small"
          paddingRight="small"
          paddingTop="standardTouchableText"
          paddingBottom="standardTouchableText"
          borderRadius="standard"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          aria-describedby={messageId}
          className={useClasses(
            styles.input,
            textStyles.fontFamily,
            textStyles.fontSize.standard,
            textStyles.colors.neutral,
          )}
        />
        <Box
          className={styles.focusOverlay}
          boxShadow="outlineFocus"
          borderRadius="standard"
          paddingTop="standardTouchableText"
          paddingBottom="standardTouchableText"
        />
      </Box>
      <FieldMessage id={messageId} tone={tone} message={message} />
    </Fragment>
  );
};
