import userEvent from '@testing-library/user-event';

import { screen, render, waitFor } from 'utils/test-utils';

import theme from 'styles/theme';

import Radio from '.';

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    const { container } = render(<Radio label="Radio" labelFor="radio" />);

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.white });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with label (black)', () => {
    const { container } = render(
      <Radio label="Radio" labelFor="radio" labelColor="black" />
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.black });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without label', () => {
    render(<Radio />);

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
  });

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn();

    render(
      <Radio label="radio" labelFor="radio" onCheck={onCheck} value="value" />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('radio'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith('value');
  });

  it('should be accessible with tab', async () => {
    render(<Radio label="radio" labelFor="radio" />);

    expect(document.body).toHaveFocus();
    userEvent.tab();

    expect(screen.getByLabelText(/radio/i)).toHaveFocus();
  });
});
