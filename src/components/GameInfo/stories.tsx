import { Story, Meta } from '@storybook/react/types-6-0';
import { CartContextData } from 'hooks/use-cart';

import GameInfo, { GameInfoProps } from '.';
import mockGameInfo from './mock';

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: mockGameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<GameInfoProps>;

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
);

export const IsInCart: Story<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true
};
