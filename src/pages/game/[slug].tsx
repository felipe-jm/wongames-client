import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming';
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { QUERY_UPCOMING } from 'graphql/queries/upcoming';
import Game, { GameTemplateProps } from 'templates/Game';

import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';

const apolloClient = initializeApollo();

const GamePage: NextPage<GameTemplateProps> = (props) => {
  const router = useRouter();

  // show loading if page is not gene
  if (router.isFallback) return null;

  return <Game {...props} />;
};

// generate in build time
export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  });

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // query game data
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  });

  if (!data.games.length) {
    return { notFound: true };
  }

  const [game] = data.games;

  // query recommended games
  const {
    data: recommendedSection
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  });

  // query upcoming games and highlight
  const TODAY = new Date().toISOString().slice(0, 10);
  const { data: upcomingSection } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({ query: QUERY_UPCOMING, variables: { date: TODAY } });

  return {
    revalidate: 10,
    props: {
      id: game.id,
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingTitle: upcomingSection.showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingSection.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcomingSection.showcase?.upcomingGames?.highlight
      ),
      recommendedTitle: recommendedSection.recommended?.section?.title,
      recommendedGames: gamesMapper(
        recommendedSection.recommended?.section?.games
      )
    }
  };
};

export default GamePage;
