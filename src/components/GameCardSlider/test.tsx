import 'match-media-mock';
import { screen } from '@testing-library/react';

import { GameCardProps } from 'components/GameCard';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import GameCardSlider from '.';

const items: GameCardProps[] = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
];
describe('<GameCardSlider />', () => {
  it('should render slider', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);
    expect(container.querySelector('.slick-slider')).toBeInTheDocument();
  });

  it('should render slider with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows when color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.white
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.white
    });
  });
});
