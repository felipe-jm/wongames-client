import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from '@styled-icons/material-outlined/Email';

import TextField, { TextFieldProps } from '.';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    icon: <Email />,
    name: 'email',
    initialValue: '',
    placeholder: 'felipemattoseu@gmail.com'
  },
  argTypes: {
    onInputChange: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta<TextFieldProps>;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithError.args = {
  error: 'Error message'
};
