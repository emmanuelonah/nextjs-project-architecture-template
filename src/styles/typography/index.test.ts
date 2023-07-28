import { typography } from '.';

describe('typography', () => {
  it('should confirm typographies are valid', () => {
    expect(typography).toMatchObject({
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
