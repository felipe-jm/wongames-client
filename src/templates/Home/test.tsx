import 'match-media-mock';

import { screen } from '@testing-library/react';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import HightlightMock from 'components/Highlight/mock';

import { renderWithTheme } from 'utils/tests/helpers';

import Home, { HomeTemplateProps } from '.';

const props: HomeTemplateProps = {
  banners: [bannersMock[0]],
  newGames: [gamesMock[0]],
  mostPopularHighlight: HightlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcommingHighlight: HightlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: HightlightMock
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contact/i)).toBeInTheDocument();
  });

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />);

    const newsSection = screen.getByRole('heading', { name: /news/i });
    expect(newsSection).toBeInTheDocument();

    const mostPopularSection = screen.getByRole('heading', {
      name: /most popular/i
    });
    const upcomingSection = screen.getByRole('heading', { name: /upcoming/i });
    const freeGamesSection = screen.getByRole('heading', {
      name: /free games/i
    });

    expect(mostPopularSection).toBeInTheDocument();
    expect(upcomingSection).toBeInTheDocument();
    expect(freeGamesSection).toBeInTheDocument();
  });

  it('should render section elements', () => {
    renderWithTheme(<Home {...props} />);

    // Banner
    expect(screen.getAllByText(/defy death/i)).toHaveLength(1);

    // Game Card (5 section with 1 card each = 5 x 1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);

    // Hightlight
    expect(screen.getAllByText(/red dead is back!/i)).toHaveLength(3);
  });
});
