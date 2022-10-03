import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Suspense} from 'react';
import {FullPageError} from 'shared/error';
import {ErrorBoundary} from 'shared/error-boundary';
import {FullScreenLoading} from 'shared/loading';
import {AppRouter} from './AppRouter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
      retry: 5
    }
  }
});

export function App() {
  return (
    <ErrorBoundary fallback={<FullPageError />}>
      <Suspense fallback={<FullScreenLoading />}>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}
