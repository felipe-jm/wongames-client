import { GetServerSideProps, NextPage } from 'next';

import Profile from 'templates/Profile';

import FormProfile from 'components/FormProfile';

import protectedRoutes from 'utils/protected-routes';

const Me: NextPage = () => (
  <Profile>
    <FormProfile />
  </Profile>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context);

  return {
    props: { session }
  };
};

export default Me;
