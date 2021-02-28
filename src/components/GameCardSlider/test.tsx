import 'match-media-mock';

import { screen, render } from 'utils/test-utils';

import theme from 'styles/theme';

import GameCardSlider from '.';
import items from './mock';

describe('<GameCardSlider />', () => {
  it('should render slider', () => {
    const { container } = render(<GameCardSlider items={items} />);
    expect(container.querySelector('.slick-slider')).toBeInTheDocument();
  });

  it('should render slider with 4 active items', () => {
    const { container } = render(<GameCardSlider items={items} />);
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows when color passed', () => {
    render(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.white
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.white
    });
  });
});
