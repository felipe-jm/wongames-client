import { GetStaticProps, NextPage } from 'next';

import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import Home, { HomeTemplateProps } from 'templates/Home';

import { initializeApollo } from 'utils/apollo';
import { bannersMapper, gamesMapper, highlightsMapper } from 'utils/mappers';

const Index: NextPage<HomeTemplateProps> = (props) => <Home {...props} />;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const TODAY = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY }
  });

  return {
    props: {
      revalidate: 60,

      banners: bannersMapper(banners),

      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightsMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections?.popularGames!.games),

      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingHighlight: highlightsMapper(sections?.upcomingGames?.highlight),
      upcomingGames: gamesMapper(upcomingGames),

      freeGamesTitle: sections?.freeGames?.title,
      freeHighlight: highlightsMapper(sections?.freeGames?.highlight),
      freeGames: gamesMapper(freeGames)
    }
  };
};

export default Index;
