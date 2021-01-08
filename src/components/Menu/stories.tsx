import { Story, Meta } from '@storybook/react/types-6-0';

import Menu, { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu
} as Meta<MenuProps>;

export const Default: Story<MenuProps> = (args) => <Menu {...args} />;

Default.parameters = {
  layout: 'fullscreen',
  background: {
    default: 'dark'
  }
};
