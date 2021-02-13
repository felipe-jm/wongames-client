import { GetServerSideProps, NextPage } from 'next';

import { GamesTemplateProps } from 'templates/Games';
import GamesTemplate from 'templates/Games';

import filterItemsMock from 'components/ExploreSidebar/mock';
import gamesMock from 'components/GameCardSlider/mock';

const GamesPage: NextPage<GamesTemplateProps> = (props) => (
  <GamesTemplate {...props} />
);

export const getServerSideProps: GetServerSideProps<GamesTemplateProps> = async () => {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock
    }
  };
};

export default GamesPage;
