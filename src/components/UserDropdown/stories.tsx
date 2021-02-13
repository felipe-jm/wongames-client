import { Story, Meta } from '@storybook/react/types-6-0';

import UserDropdown, { UserDropdownProps } from '.';

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  args: {
    username: 'Felipe'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<UserDropdownProps>;

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
);
