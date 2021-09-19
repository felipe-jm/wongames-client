import { NextPage } from 'next';

import Auth from 'templates/Auth';

import FormResetPassword from 'components/FormResetPassword';

const ResetPassword: NextPage = () => (
  <Auth title="Reset password">
    <FormResetPassword />
  </Auth>
);

export default ResetPassword;
