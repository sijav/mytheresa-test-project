import {Suspense} from 'react';
import {FullPageError} from 'src/shared/error';
import {ErrorBoundary} from 'src/shared/error-boundary';
import {ContentRegion, FooterRegion, MainLayout} from 'src/shared/layouts/main-layout';
import {FullScreenLoading} from 'src/shared/loading';
import {MainRoutes} from './MainRoutes';

export function MainContainer() {
  return (
    <MainLayout>
      <ContentRegion>
        <ErrorBoundary fallback={<FullPageError />}>
          <Suspense fallback={<FullScreenLoading />}>
            <MainRoutes />
          </Suspense>
        </ErrorBoundary>
      </ContentRegion>
      <FooterRegion>Created by sijav</FooterRegion>
    </MainLayout>
  );
}
