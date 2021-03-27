import { GetServerSideProps, NextPage } from 'next';

import { QueryProfileMe } from 'graphql/generated/QueryProfileMe';
import { QUERY_PROFILE_ME } from 'graphql/queries/profile';
import Profile from 'templates/Profile';

import FormProfile, { FormProfileProps } from 'components/FormProfile';

import { initializeApollo } from 'utils/apollo';
import protectedRoutes from 'utils/protected-routes';

const Me: NextPage<FormProfileProps> = (props) => (
  <Profile>
    <FormProfile {...props} />
  </Profile>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  });

  return {
    props: {
      session,
      username: data.me?.username,
      email: data.me?.email
    }
  };
};

export default Me;
