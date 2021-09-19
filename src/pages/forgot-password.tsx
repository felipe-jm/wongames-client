import { NextPage } from 'next';

import Auth from 'templates/Auth';

import FormForgotPassword from 'components/FormForgotPassword';

const ForgotPassword: NextPage = () => (
  <Auth title="Request new password">
    <FormForgotPassword />
  </Auth>
);

export default ForgotPassword;
