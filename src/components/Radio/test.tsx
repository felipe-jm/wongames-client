import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import Radio from '.';

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="radio" />
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.white });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with label (black)', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="radio" labelColor="black" />
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.black });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without label', () => {
    renderWithTheme(<Radio />);

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
  });

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
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
    renderWithTheme(<Radio label="radio" labelFor="radio" />);

    expect(document.body).toHaveFocus();
    userEvent.tab();

    expect(screen.getByLabelText(/radio/i)).toHaveFocus();
  });
});
