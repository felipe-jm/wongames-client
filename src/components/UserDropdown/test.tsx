import userEvent from '@testing-library/user-event';

import { screen, render } from 'utils/test-utils';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Felipe" />);

    expect(screen.getByText(/felipe/i)).toBeInTheDocument();
  });

  it('should render the menu', () => {
    render(<UserDropdown username="Felipe" />);

    userEvent.click(screen.getByText(/felipe/i));

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });
});
