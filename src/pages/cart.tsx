import { GetServerSideProps, NextPage } from 'next';

import Cart, { CartTemplateProps } from 'templates/Cart';

import itemsMock from 'components/CartList/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import cardsMock from 'components/PaymentOptions/mock';

const CartPage: NextPage<CartTemplateProps> = (props) => <Cart {...props} />;

export const getServerSideProps: GetServerSideProps<CartTemplateProps> = async () => {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock
    }
  };
};

export default CartPage;
