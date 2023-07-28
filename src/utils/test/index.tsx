import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from 'styles';

export * from '@testing-library/react';

/**
 * @renderWithOptions use this function when you want your test
 * component to access our design system
 * @param {children:React.ReactNode}
 * @returns a transpiled reactNode object
 */
export function renderWithOptions(children: React.ReactNode) {
  render(
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      {children}
    </ThemeProvider>
  );
}
