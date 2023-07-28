export function throwError(name: string, message: string, constructor?: Function, options?: Record<string, any>) {
  const error = new Error() as Error & Record<string, any>;
  error.name = name.concat(' 🚨');
  error.message = message;

  Error.captureStackTrace(error, constructor);

  if (options) {
    for (const key in options) error[key] = options[key];
  }

  throw error;
}
