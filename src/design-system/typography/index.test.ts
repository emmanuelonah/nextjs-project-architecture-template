import { typography } from '.';

describe('typography', () => {
  it('should confirm typographies are valid', () => {
    expect(typography).toMatchObject({
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
        max: '99999',
      },
      lineHeight: {
        xxs: '1.3',
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
        mobileStartWidth: '100%',
        mobileEndWidth: '767px',
        desktopStartWidth: '768px',
        desktopEndWidth: '1440px',
      },
      borderRadius: {
        sm: '8px',
        md: '11px',
        lg: '14px',
        xl: '25px',
      },
      breakpoints: ['40em', '48em', '62em', '80em'],
      title1: { fontWeight: 'bold', fontSize: '65px' },
      title2: { fontWeight: 'bold', fontSize: '50px' },
      title3: { fontWeight: 'bold', fontSize: '35px' },
      subtitle: { fontWeight: '500px', fontSize: '24px' },
      boldBody: { fontWeight: 'bold', fontSize: '17px' },
      bodyText: { fontWeight: '400px', fontSize: '16px' },
      smallText: { fontWeight: '400px', fontSize: '14px' },
      preText: { fontWeight: '400px', fontSize: '10px' },
    });
  });
});
