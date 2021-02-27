import 'match-media-mock';

import { GameCardProps } from 'components/GameCard';

import { screen, render } from 'utils/test-utils';

import theme from 'styles/theme';

import GameCardSlider from '.';

const items: GameCardProps[] = [
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 215
  },
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 235,
    promotionalPrice: 215
  },
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 235,
    promotionalPrice: 215
  },
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 235,
    promotionalPrice: 215
  },
  {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 235,
    promotionalPrice: 215
  }
];
describe('<GameCardSlider />', () => {
  it('should render slider', () => {
    const { container } = render(<GameCardSlider items={items} />);
    expect(container.querySelector('.slick-slider')).toBeInTheDocument();
  });

  it('should render slider with 4 active items', () => {
    const { container } = render(<GameCardSlider items={items} />);
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows when color passed', () => {
    render(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.white
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.white
    });
  });
});
