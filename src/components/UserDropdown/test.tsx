import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Felipe" />);

    expect(screen.getByText(/felipe/i)).toBeInTheDocument();
  });

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Felipe" />);

    userEvent.click(screen.getByText(/felipe/i));

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });
});
