import { GetStaticProps, NextPage } from 'next';

import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const WishistPage: NextPage<WishlistTemplateProps> = (props) => (
  <Wishlist {...props} />
);

export const getStaticProps: GetStaticProps<WishlistTemplateProps> = async () => {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock
    }
  };
};

export default WishistPage;
