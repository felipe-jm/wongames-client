import { NextPage } from 'next';

import Auth from 'templates/Auth';

import FormSignIn from 'components/FormSignIn';

const SignIn: NextPage = () => (
  <Auth title="Sign In">
    <FormSignIn />
  </Auth>
);

export default SignIn;
