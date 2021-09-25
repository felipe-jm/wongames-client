import 'server.mock';

import userEvent from '@testing-library/user-event';

import { render, screen } from 'utils/test-utils';

import FormForgotPassword from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

let query = {};

useRouter.mockImplementation(() => ({
  query
}));

describe('<FormForgotPassword />', () => {
  it('should render the form', () => {
    render(<FormForgotPassword />);

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /send e-mail/i })
    ).toBeInTheDocument();
  });

  it('should validate the email', async () => {
    render(<FormForgotPassword />);

    await userEvent.type(
      screen.getByPlaceholderText(/e-mail/i),
      'valid@email.com'
    );

    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }));

    expect(await screen.findByText(/You just received an email!/i));
  });

  it('should show an invalid email', async () => {
    render(<FormForgotPassword />);

    await userEvent.type(screen.getByPlaceholderText(/e-mail/i), 'invalid');

    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }));

    expect(await screen.findByText(/must be a valid email/i));
  });

  it('should show an inexistent email error', async () => {
    render(<FormForgotPassword />);

    await userEvent.type(
      screen.getByPlaceholderText(/e-mail/i),
      'false@email.com'
    );

    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }));

    expect(await screen.findByText(/This email does not exist/i));
  });

  it('should autofill if comes via logged user', () => {
    query = { email: 'valid@email.com' };

    render(<FormForgotPassword />);

    expect(screen.getByPlaceholderText(/e-mail/i)).toHaveValue(
      'valid@email.com'
    );
  });
});
