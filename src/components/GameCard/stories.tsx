import { Story, Meta } from '@storybook/react/types-6-0';

import GameCard, { GameCardProps } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img:
      'https://images.unsplash.com/photo-1574092403000-ef9c803b84bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
    price: 'R$ 235,00'
  }
} as Meta<GameCardProps>;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);
