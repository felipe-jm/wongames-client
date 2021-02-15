import 'match-media-mock';

import { screen } from '@testing-library/react';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import HightlightMock from 'components/Highlight/mock';

import { renderWithTheme } from 'utils/tests/helpers';

import Home, { HomeTemplateProps } from '.';

const props: HomeTemplateProps = {
  banners: bannersMock,
  newGamesTitle: 'New games',
  newGames: gamesMock,
  mostPopularGamesTitle: 'Most popular',
  mostPopularHighlight: HightlightMock,
  mostPopularGames: gamesMock,
  upcomingGamesTitle: 'Upcoming',
  upcomingGames: gamesMock,
  upcomingHighlight: HightlightMock,
  freeGamesTitle: 'Free games',
  freeGames: gamesMock,
  freeHighlight: HightlightMock
};

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase"></div>;
  }
}));

jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock BannerSlider"></div>;
  }
}));

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4);
  });
});
