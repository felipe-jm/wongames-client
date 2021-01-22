import 'match-media-mock';

import { screen } from '@testing-library/react';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import HightlightMock from 'components/Highlight/mock';

import { renderWithTheme } from 'utils/tests/helpers';

import Home, { HomeTemplateProps } from '.';

const props: HomeTemplateProps = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: HightlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcommingHighlight: HightlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: HightlightMock
};

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu"></div>;
  }
}));

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Footer"></div>;
  }
}));

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
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5);
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
  });
});
