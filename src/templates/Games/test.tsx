import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import filterItemsMock from 'components/ExploreSidebar/mock';

import apolloCache from 'utils/apolloCache';
import { renderWithTheme } from 'utils/tests/helpers';

import Games from '.';
import { fetchMoreMock, gamesMock } from './mocks';

jest.mock('react-lottie', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Lottie" />;
  }
}));

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  }
}));

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(screen.getByTestId('Mock Lottie')).toBeInTheDocument();
  });

  it('should render the sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    // it starts without data
    expect(screen.getByTestId('Mock Lottie')).toBeInTheDocument();

    // wait until we have data to get the elements
    // get => sure about the element
    // query => not sure about the element
    // find => async processes
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument();
  });

  it('should render more games when shore more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    userEvent.click(await screen.findByRole('button', { name: /show more/i }));

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument();
  });
});
