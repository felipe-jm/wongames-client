import { GetStaticProps, NextPage } from 'next';

import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import Home, { HomeTemplateProps } from 'templates/Home';

import { initializeApollo } from 'utils/apollo';
import { bannersMapper, gamesMapper, highlightMapper } from 'utils/mappers';

const Index: NextPage<HomeTemplateProps> = (props) => <Home {...props} />;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const TODAY = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache' // ensure new data in static generation
  });

  return {
    revalidate: 60,
    props: {
      banners: bannersMapper(banners),

      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections?.popularGames!.games),

      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      upcomingGames: gamesMapper(upcomingGames),

      freeGamesTitle: sections?.freeGames?.title,
      freeHighlight: highlightMapper(sections?.freeGames?.highlight),
      freeGames: gamesMapper(freeGames)
    }
  };
};

export default Index;
