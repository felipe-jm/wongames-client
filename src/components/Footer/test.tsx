import { screen, render } from 'utils/test-utils';

import Footer from '.';

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    render(<Footer />);

    expect(screen.getByLabelText(/contact/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/follow us/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/links/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
  });
});
