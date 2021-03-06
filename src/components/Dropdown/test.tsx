import userEvent from '@testing-library/user-event';

import { screen, render } from 'utils/test-utils';

import Dropdown from '.';

describe('<Dropdown />', () => {
  it('should render title and children', () => {
    render(<Dropdown title="Title">Children</Dropdown>);

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });

  it('should handle open/close dropdown', () => {
    render(<Dropdown title="Title">Children</Dropdown>);

    const content = screen.getByText(/children/i);

    expect(content).toHaveStyle({ opacity: 0 });
    expect(content.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(screen.getByText(/title/i));

    expect(content).toHaveStyle({ opacity: 1 });
    expect(content.getAttribute('aria-hidden')).toBe('false');
  });

  it('should handle open/close dropdown when clicking on overlay', () => {
    render(<Dropdown title="Title">Children</Dropdown>);

    const content = screen.getByText(/children/i);

    // element right after content
    const overlay = content.nextElementSibling;

    userEvent.click(screen.getByText(/title/i));

    expect(overlay).toHaveStyle({ opacity: 1 });
    expect(overlay!.getAttribute('aria-hidden')).toBe('false');

    userEvent.click(overlay!);

    expect(overlay).toHaveStyle({ opacity: 0 });
    expect(overlay!.getAttribute('aria-hidden')).toBe('true');
  });
});
