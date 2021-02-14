import { GetStaticProps, NextPage } from 'next';

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { QUERY_GAMES } from 'graphql/queries/games';
import { GamesTemplateProps } from 'templates/Games';
import GamesTemplate from 'templates/Games';

import filterItemsMock from 'components/ExploreSidebar/mock';

import { initializeApollo } from 'utils/apollo';

const GamesPage: NextPage<GamesTemplateProps> = (props) => (
  <GamesTemplate {...props} />
);

export const getStaticProps: GetStaticProps<GamesTemplateProps> = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  });

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: game.price
      })),
      filterItems: filterItemsMock
    }
  };
};

export default GamesPage;
