import { ROUTES } from './index.route';

describe('ROUTES', () => {
  it('should return all routes', () => {
    expect(ROUTES).toEqual({
      home: '/',
    });
  });
});
