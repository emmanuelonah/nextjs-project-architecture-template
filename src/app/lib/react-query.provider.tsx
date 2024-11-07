'use client';

import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const clientRef = React.useRef(new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }));

  return (
    <QueryClientProvider client={clientRef.current}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
