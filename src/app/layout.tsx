'use client';

import React from 'react';

import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import '@fontsource/poppins';

import { Main } from 'layouts';
import { GlobalStore } from 'globalstore';
import { ErrorBoundary } from 'components';
import { GlobalStyles, theme } from 'design-system';
import { StyledComponentsRegistry } from 'app/lib/registry';
//import { useStartTestServer } from 'mocks/useStartTestServer';
import { ReactQueryProvider } from 'app/lib/react-query.provider';
import { HTML_META_KEYWORDS, HTML_META_DESCRIPTION, HTML_TITLE } from 'utils';

import { SkipToMainContent } from './layout.style';

const inter = Inter({ subsets: ['latin'] });

type RootLayoutPropTypes = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutPropTypes) {
  //useStartTestServer();

  return (
    <html lang="en">
      <head>
        <title>{HTML_TITLE}</title>
        <meta property="og:title" content={HTML_TITLE}></meta>
        <meta name="twitter:title" content={HTML_TITLE}></meta>
        <meta name="description" content={HTML_META_DESCRIPTION} />
        <meta property="og:description" content={HTML_META_DESCRIPTION}></meta>
        <meta property="og:site_name" content="Project name"></meta>
        <meta name="keywords" content={HTML_META_KEYWORDS} />
      </head>
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider theme={theme}>
            <StyledComponentsRegistry>
              <GlobalStyles theme={theme} />
              <ErrorBoundary>
                <SkipToMainContent href="#main">Skip to main content</SkipToMainContent>
                <GlobalStore>
                  <Main>{children}</Main>
                </GlobalStore>
              </ErrorBoundary>
            </StyledComponentsRegistry>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
