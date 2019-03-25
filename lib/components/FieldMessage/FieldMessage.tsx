import React, { ReactNode } from 'react';
import { useStyles, useClasses } from 'treat';
import { Box } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { ErrorIcon } from '../icons/ErrorIcon/ErrorIcon';
import { TickCircleIcon } from '../icons/TickCircleIcon/TickCircleIcon';
import treatStyles from './FieldMessage.treat';

type FieldTone = 'neutral' | 'critical' | 'positive';

export interface FieldMessageProps extends TextProps {
  id: string;
  message: ReactNode | false;
  tone?: FieldTone;
  secondaryMessage?: ReactNode;
}

const renderIcon = (tone: FieldTone = 'neutral') => {
  if (tone === 'neutral') {
    return null;
  }

  const Icon: Record<FieldTone, ReactNode> = {
    neutral: null,
    critical: <ErrorIcon fill="critical" />,
    positive: <TickCircleIcon fill="positive" />,
  };

  return (
    <Box paddingRight="xsmall" className={useClasses(treatStyles.fixedSize)}>
      {Icon[tone]}
    </Box>
  );
};

export const FieldMessage = ({
  id,
  tone = 'neutral',
  message,
  secondaryMessage,
}: FieldMessageProps) => {
  if (message === false) {
    return null;
  }

  const styles = useStyles(treatStyles);

  return (
    <Box id={id} paddingBottom="small" display="flex" className={styles.root}>
      <Box className={styles.messageContainer}>
        <Text color={tone}>
          <Box display="flex">
            {renderIcon(tone)}
            {message}
          </Box>
        </Text>
      </Box>
      {secondaryMessage ? (
        <Box paddingLeft="xsmall" className={styles.fixedSize}>
          {secondaryMessage}
        </Box>
      ) : null}
    </Box>
  );
};
