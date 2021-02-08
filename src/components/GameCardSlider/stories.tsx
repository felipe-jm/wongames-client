import { Story, Meta } from '@storybook/react/types-6-0';

import GameCardSlider, { GameCardSliderProps } from '.';
import items from './mock';

export default {
  title: 'Game/GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<GameCardSliderProps>;

export const Default: Story<GameCardSliderProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={items} {...args} />
  </div>
);
