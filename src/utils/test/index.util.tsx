import React from 'react';

import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';

import { Main } from 'layouts';
import { GlobalStore } from 'globalstore';
import { GlobalStyles, theme } from 'design-system';

import { ReactQueryProvider } from '../../app/lib/react-query.provider';

export * from '@testing-library/react';

type WrapperPropTypes = {
  children: React.ReactNode;
};

function Wrapper(props: WrapperPropTypes) {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <GlobalStore>
          <Main>{props.children}</Main>
        </GlobalStore>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

/**
 * @renderWithOptions use this function when you want your test component
 * to access the `design-system`, `react-query`, and `globalstore`.
 * @returns a transpiled reactNode object
 */
export function renderWithOptions(ui: React.ReactElement, opts?: RenderOptions) {
  return render(ui, { wrapper: Wrapper, ...opts });
}
