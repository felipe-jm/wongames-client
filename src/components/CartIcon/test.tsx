import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import CartIcon from '.';

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={42} />);

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument();
    expect(screen.getByText(/42/)).toBeInTheDocument();
  });

  it('should render with badge only if quantity have positive numbers', () => {
    renderWithTheme(<CartIcon quantity={-42} />);

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/42/)).not.toBeInTheDocument();
  });
});
