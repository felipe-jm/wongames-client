import Button from 'components/Button';
import Heading from 'components/Heading';
import TextField from 'components/TextField';

import * as S from './styles';

export type FormProfileProps = {
  username?: string;
  email?: string;
};

const FormProfile = ({ email, username }: FormProfileProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue={email}
        label="E-mail"
        disabled
      />

      <TextField
        name="password"
        type="password"
        placeholder="Type your password"
        label="Password"
      />

      <TextField
        name="new_password"
        type="new_password"
        placeholder="Type your new password"
        label="Password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
);

export default FormProfile;
