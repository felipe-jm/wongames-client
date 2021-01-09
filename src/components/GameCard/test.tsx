import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import GameCard, { GameCardProps } from '.';

const props: GameCardProps = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
  onFav: jest.fn()
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText(props.price);

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });

    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />);

    const originalPrice = screen.getByText(props.price);
    const withDiscountPrice = screen.getByText('R$ 200,00');

    expect(originalPrice).toHaveStyle({ textDecoration: 'line-through' });

    expect(withDiscountPrice).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav function when favorite is clicked', () => {
    renderWithTheme(<GameCard {...props} favorite onFav={props.onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(props.onFav).toBeCalled();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
    expect(ribbon).toBeInTheDocument();
  });
});
