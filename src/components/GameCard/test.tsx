import { screen, render, fireEvent } from 'utils/test-utils';

import theme from 'styles/theme';

import GameCard, { GameCardProps } from '.';

const props: GameCardProps = {
  id: '1',
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235,
  onFav: jest.fn()
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    render(<GameCard {...props} />);

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

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    render(<GameCard {...props} />);

    const price = screen.getByText('$235.00');

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });

    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it('should render a line-through in price when promotional', () => {
    render(<GameCard {...props} promotionalPrice={200} />);

    const originalPrice = screen.getByText('$235.00');
    const withDiscountPrice = screen.getByText('$200.00');

    expect(originalPrice).toHaveStyle({ textDecoration: 'line-through' });

    expect(withDiscountPrice).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });

  it('should render a filled favorite icon when favorite is true', () => {
    render(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav function when favorite is clicked', () => {
    render(<GameCard {...props} favorite onFav={props.onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(props.onFav).toBeCalled();
  });

  it('should render a Ribbon', () => {
    render(
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

  it('should render a ribbon and show free when price or promotional price is zero', () => {
    render(<GameCard {...props} price={0} />);

    const freeRibbon = screen.getByText(/free/i);

    expect(freeRibbon).toHaveStyle({ backgroundColor: theme.colors.secondary });
    expect(freeRibbon).toHaveStyle({ height: '3.6rem', fontSize: '1.4rem' });
    expect(freeRibbon).toBeInTheDocument();
  });
});
