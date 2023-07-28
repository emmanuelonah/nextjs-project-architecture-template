/**
 * We use RadixUI and Styled-components together.
 * In a situation where we need to style a Radix primitive,
 * we then integrate it with the styled component like shown below:
 * ```ts
 * 'use client';
 * import styled from 'styled-components';
 * import * as Accordion from '@radix-ui/react-accordion';
 *
 * const AccordionRoot = styled(Accordion.Root)`
 *  background-color: red;
 * `;
 * const AccordionItem = styled(Accordion.Item)`
 *  background-color: pink;
 * `;
 * const AccordionTrigger = styled(Accordion.Trigger)`
 *  background-color: green;
 * `;
 * const AccordionContent = styled(Accordion.Content)`
 *   color: orange;
 * `;
 *
 * export default function Home() {
 *   return (
 *     <AccordionRoot type="single" defaultValue="item-1" collapsible>
 *      <AccordionItem value="item-1">
 *        <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *        <AccordionContent>
 *          Yes. It adheres to the WAI-ARIA design pattern.
 *        </AccordionContent>
 *      </AccordionItem>
 *    </AccordionRoot>
 *  );
 *}
 *
 * ```
 */

import { createGlobalStyle } from 'styled-components';

import { designTokens } from './design-tokens';

export const theme = {
  colors: designTokens.colors,
  typography: designTokens.typography,
};

export const GlobalStyles = createGlobalStyle<{ theme: typeof theme }>`
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: ${({ theme }) => theme.typography.fontFamilies.primary};
        font-size: ${({ theme }) => theme.typography.bodyText.fontSize};
        font-weight: ${({ theme }) => theme.typography.bodyText.fontWeight};
        line-height: ${({ theme }) => theme.typography.lineHeight.sm};
        text-rendering: optimizeLegibility;
        scroll-behavior: smooth;
    }

    body {
        background: ${({ theme }) => theme.colors.white300};
        line-height: 1.5;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: ${({ theme }) => theme.typography.lineHeight.md};
    }

    img {
        max-width: 100%;
        display: block;
        height: auto;
    }

    ul, ol {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    select,
    button,
    [type="submit"],
    [type="reset"],
    [type="button"]{
        cursor: pointer;
        &:disabled{
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
`;
