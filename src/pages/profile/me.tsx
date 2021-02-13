import { NextPage } from 'next';

import Profile from 'templates/Profile';

import FormProfile from 'components/FormProfile';

const Me: NextPage = () => (
  <Profile>
    <FormProfile />
  </Profile>
);

export default Me;
