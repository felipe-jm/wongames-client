import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { DropdownProps } from '.';

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    title: 'Click Me',
    children: 'Content'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<DropdownProps>;

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />;
