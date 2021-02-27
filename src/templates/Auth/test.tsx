import { render, screen } from 'utils/test-utils';

import Auth from '.';

describe('<Auth />', () => {
  it('should render the logos, title, subtitle, footer and children', () => {
    const authTitle = 'Title';
    render(
      <Auth title={authTitle}>
        <input type="text" />
      </Auth>
    );

    expect(screen.getAllByRole('img', { name: /Won Games/i })).toHaveLength(2);

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place!/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: authTitle })
    ).toBeInTheDocument();

    expect(
      screen.getByText('Won Games 2020 © Todos os Direitos Reservados')
    ).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
