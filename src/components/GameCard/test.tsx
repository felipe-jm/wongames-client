import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import GameCard, { GameCardProps } from '.';

const props: GameCardProps = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});