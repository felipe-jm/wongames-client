import { GetServerSideProps, NextPage } from 'next';

import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist';

import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import protectedRoutes from 'utils/protected-routes';

const WishistPage: NextPage<WishlistTemplateProps> = (props) => (
  <Wishlist {...props} />
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context);

  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  });

  return {
    props: {
      session,
      games: gamesMapper(data.recommended?.section?.games),
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  };
};

export default WishistPage;
