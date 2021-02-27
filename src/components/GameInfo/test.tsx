import { screen, render } from 'utils/test-utils';

import GameInfo from '.';

const props = {
  title: 'Title',
  description: 'Description',
  price: 210
};

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = render(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();
    expect(screen.getByText(/\$210.00/)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render buttons', () => {
    render(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /add to wishlist/i })
    ).toBeInTheDocument();
  });
});
