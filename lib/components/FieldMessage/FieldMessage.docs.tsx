import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { FieldMessage } from './FieldMessage';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Critical Field Message',
      render: ({ id }) => (
        <FieldMessage
          id={id}
          tone="critical"
          message="This is a critical message."
        />
      ),
    },
    {
      label: 'Positive Field Message',
      render: ({ id }) => (
        <FieldMessage
          id={id}
          tone="positive"
          message="This is a positive message."
        />
      ),
    },
    {
      label: 'Critical with long (wrapping) message',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <FieldMessage
            id={id}
            tone="critical"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla."
          />
        </div>
      ),
    },
    {
      label: "No message, i.e. don't reserve white space",
      code: `<FieldMessage message={false} />`,
    },
  ],
};

export default docs;
