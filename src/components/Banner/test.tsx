import { render, screen } from 'utils/test-utils';

import Banner from '.';

const bannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
};

describe('<Banner />', () => {
  it('should render the banner correctly', () => {
    render(<Banner {...bannerProps} />);

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /play the new crashLands season/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /defy death/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /defy death/i })).toHaveAttribute(
      'src'
    );
  });

  it('should render a Ribbon', () => {
    render(
      <Banner
        {...bannerProps}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/My Ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
