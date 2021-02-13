import { Story, Meta } from '@storybook/react/types-6-0';

import Menu, { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
  layout: 'fullscreen',
  background: {
    default: 'won-dark'
  }
} as Meta<MenuProps>;

export const Default: Story<MenuProps> = (args) => <Menu {...args} />;

export const Logged: Story<MenuProps> = (args) => (
  <Menu {...args} username="Felipe" />
);
