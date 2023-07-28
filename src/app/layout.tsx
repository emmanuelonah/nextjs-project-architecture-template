'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import styled, { ThemeProvider } from 'styled-components';

import '@fontsource/poppins';

import { Main } from 'layouts';
import { GlobalStore } from 'globalstore';
import { GlobalStyles, theme } from 'styles';
import { StyledComponentsRegistry } from 'app/lib/registry';
import { ReactQueryProvider } from 'app/lib/react-query.provider';
import { HTML_META_KEYWORDS, HTML_META_DESCRIPTION, HTML_TITLE } from 'utils';

const inter = Inter({ subsets: ['latin'] });

const SkipToMainContent = styled.a`
  background-color: ${(props) => props.theme.colors.warning400};
  border: solid 0.0625rem ${(props) => props.theme.colors.dark400};
  color: ${(props) => props.theme.colors.white400};
  border-radius: ${(props) => props.theme.typography.borderRadius.btn};
  font-size: ${(props) => props.theme.typography.bodyText.fontSize};
  padding: 0.5rem;
  position: absolute;
  left: 0;
  top: -45px;
  z-index: 100;
  transition: top 0.5s ease-out;
  outline: none;

  &:focus {
    position: absolute;
    left: 0;
    top: 0;
    transition: top 0.3s ease-out;
  }
`;

type RootLayoutPropTypes = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutPropTypes) {
  return (
    <html lang="en">
      <head>
        <title>{HTML_TITLE}</title>
        <meta property="og:title" content={HTML_TITLE}></meta>
        <meta name="twitter:title" content={HTML_TITLE}></meta>
        <meta name="description" content={HTML_META_DESCRIPTION} />
        <meta property="og:description" content={HTML_META_DESCRIPTION}></meta>
        <meta property="og:site_name" content="Service Dey"></meta>
        <meta name="keywords" content={HTML_META_KEYWORDS} />
      </head>

      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider theme={theme}>
            <StyledComponentsRegistry>
              <GlobalStyles theme={theme} />
              <SkipToMainContent href="#main">Skip to main content</SkipToMainContent>
              <GlobalStore>
                <Main>{children}</Main>
              </GlobalStore>
            </StyledComponentsRegistry>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
