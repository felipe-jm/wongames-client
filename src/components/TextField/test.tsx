import { Email } from '@styled-icons/material-outlined/Email';
import userEvent from '@testing-library/user-event';

import { screen, render, waitFor } from 'utils/test-utils';

import TextField from '.';

describe('<TextField />', () => {
  it('should render with label', () => {
    render(<TextField label="I'm a label" name="Label" />);

    expect(screen.getByLabelText("I'm a label")).toBeInTheDocument();
  });

  it('should render without label', () => {
    render(<TextField />);

    expect(screen.queryByLabelText("I'm a label")).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    render(<TextField placeholder="Just holding" />);

    expect(screen.getByPlaceholderText('Just holding')).toBeInTheDocument();
  });

  it('should render with icon', () => {
    render(
      <TextField
        placeholder="Just holding"
        icon={<Email data-testid="icon" />}
      />
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render with icon on the right side', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('should be disabled', async () => {
    const onInput = jest.fn();
    render(<TextField disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'Text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it('should change its value when typing', async () => {
    const onInput = jest.fn();
    render(<TextField onInput={onInput} label="I'm a label" name="Label" />);

    const input = screen.getByRole('textbox');
    const text = "I'm a text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('should render with error', () => {
    const { container } = render(
      <TextField
        label="TextField"
        name="Label"
        error="Ops!"
        icon={<Email data-testid="icon" />}
      />
    );

    expect(screen.getByText('Ops!')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be accessible using tab key', async () => {
    render(<TextField label="I'm a label" name="Label" />);

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
