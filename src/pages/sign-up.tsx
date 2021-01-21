import { NextPage } from 'next';

import Auth from 'templates/Auth';

import FormSignUp from 'components/FormSignUp';

const SignUp: NextPage = () => (
  <Auth title="Sign Up">
    <FormSignUp />
  </Auth>
);

export default SignUp;
