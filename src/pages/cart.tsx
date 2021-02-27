import { GetServerSideProps, NextPage } from 'next';

import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import Cart, { CartTemplateProps } from 'templates/Cart';

import itemsMock from 'components/CartList/mock';
import cardsMock from 'components/PaymentOptions/mock';

import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';

const CartPage: NextPage<CartTemplateProps> = (props) => <Cart {...props} />;

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  });

  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  };
};

export default CartPage;
