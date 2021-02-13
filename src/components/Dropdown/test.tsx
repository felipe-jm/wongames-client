import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import Dropdown from '.';

describe('<Dropdown />', () => {
  it('should render title and children', () => {
    renderWithTheme(<Dropdown title="Title">Children</Dropdown>);

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });

  it('should handle open/close dropdown', () => {
    renderWithTheme(<Dropdown title="Title">Children</Dropdown>);

    const content = screen.getByText(/children/i);

    expect(content).toHaveStyle({ opacity: 0 });
    expect(content.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(screen.getByText(/title/i));

    expect(content).toHaveStyle({ opacity: 1 });
    expect(content.getAttribute('aria-hidden')).toBe('false');
  });
});
