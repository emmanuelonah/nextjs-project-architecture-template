import { throwError } from './index.util';

const ERROR_CONSTRUCT = {
  name: 'ContextError',
  message: 'Sorry, you out of context',
  options: { engineer: 'Foo Bar Baz' },
};
describe('throwError', () => {
  it('should confirm that throwError actually throws an error', () => {
    const errorContext = () =>
      throwError(ERROR_CONSTRUCT.name, ERROR_CONSTRUCT.message, errorContext, { ...ERROR_CONSTRUCT.options });

    expect(errorContext).toThrowError(ERROR_CONSTRUCT);
  });
});
