import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '../src/design-system';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
