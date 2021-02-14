import { useMemo } from 'react';

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache()
  });
}

export function initializeApollo(initialState = {}) {
  // checks if there is already an existing instance
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  // recovering cache data
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  // initializes SSR with clean cache
  if (typeof window === 'undefined') return apolloClientGlobal;

  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
