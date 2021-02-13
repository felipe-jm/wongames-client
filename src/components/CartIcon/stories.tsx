import { Story, Meta } from '@storybook/react/types-6-0';

import CartIcon, { CartIconProps } from '.';

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<CartIconProps>;

export const Default: Story<CartIconProps> = (args) => <CartIcon {...args} />;

export const WithItems: Story<CartIconProps> = (args) => (
  <CartIcon {...args} quantity={42} />
);
