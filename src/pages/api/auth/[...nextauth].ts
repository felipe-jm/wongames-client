import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import { GenericObject } from 'next-auth/_utils';
import Providers from 'next-auth/providers';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const options: InitOptions = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize({ email, password }) {
        const response = await fetch(`${apiUrl}/auth/local`, {
          method: 'POST',
          body: new URLSearchParams({ identifier: email, password })
        });

        const data = await response.json();

        if (data.user) {
          return { ...data.user, jwt: data.jwt };
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    session: async (session: GenericObject, user: GenericObject) => {
      session.jwt = user.jwt;
      session.id = user.id;

      return Promise.resolve(session);
    },
    jwt: async (token: GenericObject, user: GenericObject) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.username;
        token.jwt = user.jwt;
      }

      return Promise.resolve(token);
    }
  }
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
