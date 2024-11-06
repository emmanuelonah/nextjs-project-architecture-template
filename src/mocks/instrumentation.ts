import { __TEST__ } from 'utils';

export async function startTestServer() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && __TEST__) {
    const { server } = await import('./server');
    server.listen();
  }
}
