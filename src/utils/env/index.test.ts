import { __TEST__, __DEV__, __PROD__ } from '.';

describe('env', () => {
  it('should confirm that this is a Node JS Test environment', () => {
    expect(__TEST__ && !__DEV__ && !__PROD__).toBeTruthy();
  });
});
