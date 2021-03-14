import { GetServerSideProps, NextPage } from 'next';

import Profile from 'templates/Profile';

import OrdersList, { OrdersListProps } from 'components/OrdersList';
import ordersMock from 'components/OrdersList/mock';

import protectedRoutes from 'utils/protected-routes';

const Orders: NextPage<OrdersListProps> = ({ items }) => (
  <Profile>
    <OrdersList items={items} />
  </Profile>
);

export const getServerSideProps: GetServerSideProps<OrdersListProps> = async (
  context
) => {
  const session = await protectedRoutes(context);

  return {
    props: {
      items: ordersMock,
      session
    }
  };
};

export default Orders;
