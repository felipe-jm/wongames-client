import { signIn } from 'next-auth/client';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState } from 'react';

import { Email, Lock } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import { FormWrapper, FormLink, FormLoading } from 'components/Form';
import TextField from 'components/TextField';

import * as S from './styles';

const FormSignIn: React.FC = () => {
  const { push } = useRouter();

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (field: string, value: string) => {
    setValues((oldValues) => ({ ...oldValues, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    });

    if (result?.url) {
      return push(result?.url);
    }

    setLoading(false);

    console.log('email or password are invalid');
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="E-mail"
          type="email"
          onInputChange={(value) => handleInput('email', value)}
          icon={<Email />}
        />

        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(value) => handleInput('password', value)}
          icon={<Lock />}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Do not have an account?{' '}
          <Link href="/sign-up">
            <a>Sign Up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
