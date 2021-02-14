import { GetServerSideProps, NextPage } from 'next';

import Home, { HomeTemplateProps } from 'templates/Home';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import HightlightMock from 'components/Highlight/mock';

const Index: NextPage<HomeTemplateProps> = (props) => <Home {...props} />;

export const getServerSideProps: GetServerSideProps<HomeTemplateProps> = async () => {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: HightlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: HightlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: HightlightMock
    }
  };
};

export default Index;
