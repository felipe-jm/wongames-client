import { screen, render } from 'utils/test-utils';

import theme from 'styles/theme';

import ProfileMenu, { ProfileLinks } from '.';

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = render(<ProfileMenu />);

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /my orders/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the menu with and active link defined', () => {
    render(<ProfileMenu activeLink={ProfileLinks.Cards} />);

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    });
  });
});
