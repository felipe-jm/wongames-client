import { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import {
  cartContext,
  CartContextData,
  CartContextDefaultValues
} from 'hooks/use-cart';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

type CustomRenderProps = {
  cartProvidersProps?: CartContextData;
} & Omit<RenderOptions, 'queries'>;

const customRender = (
  ui: ReactElement,
  {
    cartProvidersProps = CartContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <cartContext.Provider value={cartProvidersProps}>
        {ui}
      </cartContext.Provider>
    </ThemeProvider>,
    renderOptions
  );

export * from '@testing-library/react';
export { customRender as render };
