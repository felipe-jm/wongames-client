import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import Theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>Next.js - Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Simple Next.js boilerplate with lint-staged, husky, eslint + prettier, jest, storybook and styled-components"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
