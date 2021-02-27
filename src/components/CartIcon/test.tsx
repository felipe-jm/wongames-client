import { render, screen } from 'utils/test-utils';

import CartIcon from '.';

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    render(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should render with badge', () => {
    render(<CartIcon quantity={42} />);

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument();
    expect(screen.getByText(/42/)).toBeInTheDocument();
  });

  it('should render with badge only if quantity have positive numbers', () => {
    render(<CartIcon quantity={-42} />);

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/42/)).not.toBeInTheDocument();
  });
});
