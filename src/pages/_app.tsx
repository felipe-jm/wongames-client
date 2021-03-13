import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';

import { ApolloProvider } from '@apollo/client';
import { CartProvider } from 'hooks/use-cart';
import { ThemeProvider } from 'styled-components';

import { useApollo } from 'utils/apollo';

import GlobalStyles from 'styles/global';
import Theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <CartProvider>
          <Head>
            <title>Won Games</title>
            <link rel="shortcut icon" href="/img/logo-gh.svg" />
            <link rel="apple-touch-icon" href="/img/logo-gh.svg" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="All your favorite games in one place!"
            />
          </Head>

          <GlobalStyles />
          <NextNprogress
            color="#F231A5"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
