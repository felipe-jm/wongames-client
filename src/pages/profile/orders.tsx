import { GetServerSideProps, NextPage } from 'next';

import Profile from 'templates/Profile';

import OrdersList, { OrdersListProps } from 'components/OrdersList';
import ordersMock from 'components/OrdersList/mock';

const Orders: NextPage<OrdersListProps> = ({ items }) => (
  <Profile>
    <OrdersList items={items} />
  </Profile>
);

export const getServerSideProps: GetServerSideProps<OrdersListProps> = async () => {
  return {
    props: {
      items: ordersMock
    }
  };
};

export default Orders;
