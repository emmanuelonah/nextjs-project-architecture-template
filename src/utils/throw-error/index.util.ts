/**
 * @throwError function throws an error with a custom name, message, and optional
 * additional options.
 * @param {string} name - The name of the error. It is a string that will be concatenated with a " 🚨"
 * emoji to make it more noticeable.
 * @param {string} message - The `message` parameter is a string that represents the error message that
 * will be displayed when the error is thrown.
 * @param {Function} [constructor] - The `constructor` parameter is an optional parameter that
 * represents the constructor function of the error. It is used to capture the stack trace of the
 * error. If provided, the `Error.captureStackTrace` method is called with the error and the
 * constructor function as arguments to capture the stack trace. If not provided
 * @param [options] - The `options` parameter is an optional object that allows you to pass additional
 * information or custom properties to the error object. It is a record type, which means it is a
 * key-value pair object where the keys are strings and the values can be of any type.
 */
export function throwError<OptionsValues = any>(
  name: string,
  message: string,
  constructor?: Function,
  options?: Record<string, OptionsValues>
) {
  const error = new Error();
  error.name = name.concat(' 🚨');
  error.message = message;

  Error.captureStackTrace(error, constructor);

  if (options) Object.assign(error, options);

  throw error;
}
