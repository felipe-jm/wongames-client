import 'match-media-mock';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import HightlightMock from 'components/Highlight/mock';

import { screen, render } from 'utils/test-utils';

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
    render(<Home {...props} />);

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4);
  });
});
