import { Story, Meta } from '@storybook/react/types-6-0';
import { CartContextData } from 'hooks/use-cart';

import GameCard, { GameCardProps } from '.';

export default {
  title: 'Game/GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1574092403000-ef9c803b84bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
    price: 235
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta<GameCardProps>;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const IsInCart: Story<GameCardProps & CartContextData> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true
};

export const WithPromotionalPrice: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithPromotionalPrice.args = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://images.unsplash.com/photo-1574092403000-ef9c803b84bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
  price: 235,
  promotionalPrice: 200
};

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://images.unsplash.com/photo-1574092403000-ef9c803b84bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
  price: 235,
  ribbon: '20% OFF'
};
