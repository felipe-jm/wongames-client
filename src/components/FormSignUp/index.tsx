import Link from 'next/link';

import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined';
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes';
import { MUTATION_REGISTER } from 'graphql/mutations/register';

import Button from 'components/Button';
import { FormWrapper, FormLink } from 'components/Form';
import TextField from 'components/TextField';

const FormSignUp: React.FC = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  });

  const [createUser] = useMutation(MUTATION_REGISTER);

  const handleInput = (field: string, value: string) => {
    setValues((oldValues) => ({ ...oldValues, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          onInputChange={(value) => handleInput('username', value)}
          icon={<AccountCircle />}
        />

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

        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          onInputChange={(value) => handleInput('confirm-password', value)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth>
          Sign up now
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};
export default FormSignUp;
