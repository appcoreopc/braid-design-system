import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { Alert } from './Alert';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Default Info Alert',
      render: () => (
        <Alert tone="info">This is an important piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Info Alert',
      render: () => (
        <Alert weight="strong" tone="info">
          This is an important piece of information.
        </Alert>
      ),
    },
    {
      label: 'Weak Info Alert',
      render: () => (
        <Alert weight="weak" tone="info">
          This is an important piece of information.
        </Alert>
      ),
    },
    {
      label: 'Default Critical Alert',
      render: () => (
        <Alert tone="critical">This is a critical piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Critical Alert',
      render: () => (
        <Alert weight="strong" tone="critical">
          This is a critical piece of information.
        </Alert>
      ),
    },
    {
      label: 'Weak Critical Alert',
      render: () => (
        <Alert weight="weak" tone="critical">
          This is a critical piece of information.
        </Alert>
      ),
    },
    {
      label: 'Default Positive Alert',
      render: () => (
        <Alert tone="positive">This is a positive piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Positive Alert',
      render: () => (
        <Alert weight="strong" tone="positive">
          This is a positive piece of information.
        </Alert>
      ),
    },
    {
      label: 'Weak Positive Alert',
      render: () => (
        <Alert weight="weak" tone="positive">
          This is a positive piece of information.
        </Alert>
      ),
    },
  ],
};

export default docs;
