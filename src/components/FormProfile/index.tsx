import Button from 'components/Button';
import Heading from 'components/Heading';
import TextField from 'components/TextField';

import * as S from './styles';

const FormProfile: React.FC = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField name="name" placeholder="Name" label="Name" />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
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
    </S.Form>

    <Button size="large">Save</Button>
  </>
);

export default FormProfile;
