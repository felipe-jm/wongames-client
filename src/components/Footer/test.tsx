import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Footer from '.';

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    renderWithTheme(<Footer />);

    expect(screen.getByLabelText(/contact/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/follow us/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/links/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
  });
});
