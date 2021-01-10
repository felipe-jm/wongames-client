import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import Theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
