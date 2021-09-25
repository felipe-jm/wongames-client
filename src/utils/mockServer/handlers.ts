import { rest } from 'msw';

type ForgotPasswordReqBody = {
  email: string;
};

type ResetPasswordReqBody = {
  code: string;
  password: string;
  passwordConfirmation: string;
};

export const handlers = [
  rest.post<ForgotPasswordReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    (req, res, ctx) => {
      const { email } = req.body;

      // when it fails
      if (email === 'false@email.com') {
        return res(
          ctx.status(400),
          ctx.json({
            error: 'Bad Request',
            message: [
              {
                messages: [
                  {
                    message: 'This email does not exist'
                  }
                ]
              }
            ]
          })
        );
      }

      // when it succeeds
      return res(
        ctx.status(200),
        ctx.json({
          ok: true
        })
      );
    }
  ),

  rest.post<ResetPasswordReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
    (req, res, ctx) => {
      const { code } = req.body;

      // when it fails
      if (code === 'wrong-code') {
        return res(
          ctx.status(400),
          ctx.json({
            error: 'Bad Request',
            message: [
              {
                messages: [
                  {
                    message: 'Incorrect code provided.'
                  }
                ]
              }
            ]
          })
        );
      }

      // when it succeeds
      return res(
        ctx.status(200),
        ctx.json({
          user: {
            email: 'valid@email.com'
          }
        })
      );
    }
  )
];
