/**
 * @typography this is our typographic design-token.
 * we try to follow the css field convention for
 * easy usage.
 *
 * @sample
 * ```ts
 *   const H1 = styled.h1`
 *      font-weight: ${(props) => props.theme.typography.title1.fontWeight};
        font-size: ${(props) => props.theme.typography.title1.fontSize};
 *   `;
 * ```
 */
export const typography = {
  fontFamilies: {
    primary: '"Poppins", sans-serif',
    secondary: 'Inter',
  },
  zIndexes: {
    step1: '100',
    step2: '200',
    step3: '300',
    overlay: '500',
    modal: '1000',
  },
  lineHeight: {
    xs: '1.5',
    sm: '1.75',
    md: '2',
    lg: '2.25',
    xl: '2.5',
    xxl: '2.75',
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '6rem',
  },
  pageWidth: {
    minWidth: '100%',
    maxWidth: '1022px',
  },
  borderRadius: {
    btn: '11px',
  },
  breakpionts: ['40em', '52em', '64em', '80em'],
  title1: { fontWeight: 'bold', fontSize: '65px' },
  title2: { fontWeight: 'bold', fontSize: '50px' },
  title3: { fontWeight: 'bold', fontSize: '35px' },
  subtitle: { fontWeight: '500px', fontSize: '24px' },
  boldBody: { fontWeight: 'bold', fontSize: '17px' },
  bodyText: { fontWeight: '400px', fontSize: '16px' },
  smallText: { fontWeight: '400px', fontSize: '14px' },
  preText: { fontWeight: '400px', fontSize: '10px' },
} as const;
