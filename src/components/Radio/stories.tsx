import { Story, Meta } from '@storybook/react/types-6-0';

import Radio, { RadioProps } from '.';

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta<RadioProps>;

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        id="first"
        name="category"
        label="Action"
        labelFor="action"
        value="first"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        id="second"
        name="category"
        label="Adventure"
        labelFor="adventure"
        value="second"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        id="third"
        name="category"
        label="Strategy"
        labelFor="strategy"
        value="third"
        {...args}
      />
    </div>
  </>
);
