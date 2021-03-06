import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';

import filterItemsMock from 'components/ExploreSidebar/mock';

import apolloCache from 'utils/apolloCache';
import { screen, render } from 'utils/test-utils';

import Games from '.';
import { fetchMoreMock, gamesMock, noGamesMock } from './mocks';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}));

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  }
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  }
}));

describe('<Games />', () => {
  it('should render the sections', async () => {
    render(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    // wait until we have data to get the elements
    // get => sure about the element
    // query => not sure about the element
    // find => async processes
    expect(await screen.findByText(/Price/i)).toBeInTheDocument();
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument();
  });

  it('should render empty when no games', async () => {
    render(
      <MockedProvider mocks={[noGamesMock]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(
      await screen.findByText(/We couldn't find any games with these filters/i)
    ).toBeInTheDocument();
  });

  it('should render more games when shore more is clicked', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    userEvent.click(await screen.findByRole('button', { name: /show more/i }));

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument();
  });

  it('should change push router when selecting a filter', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }));
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }));
    userEvent.click(await screen.findByRole('radio', { name: /low to high/i }));

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    });
  });
});
