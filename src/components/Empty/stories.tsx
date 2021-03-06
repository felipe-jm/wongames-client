import { Story, Meta } from '@storybook/react/types-6-0';

import Empty, { EmptyProps } from '.';

export default {
  title: 'Empty',
  component: Empty,
  args: {
    title: 'Your wishlist is empty',
    description: 'Games add to your wishlist will appear here',
    hasLink: true
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<EmptyProps>;

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />;
