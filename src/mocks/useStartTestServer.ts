import { useEffect } from 'react';

import { startTestServer } from './instrumentation';

export function useStartTestServer() {
  useEffect(() => {
    startTestServer();
  }, []);
}
