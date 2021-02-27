import { screen, render } from 'utils/test-utils';

import GameDetails from '.';
import mockGameDetails from './mock';

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...mockGameDetails} />);

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /rating/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /genres/i })
    ).toBeInTheDocument();
  });

  it('should render platform icons', () => {
    render(<GameDetails {...mockGameDetails} />);

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('should render the developer', () => {
    render(<GameDetails {...mockGameDetails} />);

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument();
  });

  it('should render the publisher', () => {
    render(<GameDetails {...mockGameDetails} />);

    expect(screen.getByText(/Walkabout/i)).toBeInTheDocument();
  });

  it('should render free rating when BR0', () => {
    render(<GameDetails {...mockGameDetails} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...mockGameDetails} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('should render the formated date', () => {
    render(<GameDetails {...mockGameDetails} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    render(<GameDetails {...mockGameDetails} />);

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument();
  });
});
