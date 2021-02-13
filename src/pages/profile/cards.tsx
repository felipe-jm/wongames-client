import { GetServerSideProps, NextPage } from 'next';

import Profile from 'templates/Profile';

import CardsList, { CardsListProps } from 'components/CardsList';
import mockCards from 'components/PaymentOptions/mock';

const Cards: NextPage<CardsListProps> = ({ cards }) => (
  <Profile>
    <CardsList cards={cards} />
  </Profile>
);

export const getServerSideProps: GetServerSideProps<CardsListProps> = async () => {
  return {
    props: {
      cards: mockCards
    }
  };
};

export default Cards;
