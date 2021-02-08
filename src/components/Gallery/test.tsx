import 'match-media-mock';
import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Gallery from '.';
import mockItems from './mock';

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src);
  });

  it('should open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    // select our modal
    const modal = screen.getByLabelText('modal');

    // check if is hidden
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    // click to open and check if it opens
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    // click in thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    );

    // expects thumbnail image to be open
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i });
    expect(img.parentElement?.parentElement).toHaveClass('slick-active');
  });

  it('should close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    // select our modal
    const modal = screen.getByLabelText('modal');

    // click to open
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    );

    // click to close
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should close modal when ESC button is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    );

    // select our menuFull
    const modal = screen.getByLabelText('modal');

    // click to open
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    );

    // click to close
    fireEvent.keyUp(container, { key: 'Escape' });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });
});
