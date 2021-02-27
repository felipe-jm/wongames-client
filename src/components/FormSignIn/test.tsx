import { screen, render } from 'utils/test-utils';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />);

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /sign in now/i
      })
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render the forgot password link', () => {
    render(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /Forgot your password?/i })
    ).toBeInTheDocument();
  });

  it('should render the sign up text and link', () => {
    render(<FormSignIn />);

    expect(screen.getByRole('link', { name: /Sign Up/i })).toBeInTheDocument();
    expect(screen.getByText(/Do not have an account?/i)).toBeInTheDocument();
  });
});
