import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta<CheckboxProps>;

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox label="Action" labelFor="action" isChecked {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox label="Adventure" labelFor="adventure" {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox label="Strategy" labelFor="strategy" {...args} />
    </div>
  </>
);
