import React, {
  lazy, Suspense, FC,
} from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import '@/assets/styles/index.scss';
import { Ripple } from 'react-spinners-css';
import Layout from '@/utils/components/Layout';
import ROUTES from '@/const/routes';

const HomePage = lazy(() => import('@/pages/Home'));
const EastersPage = lazy(() => import('@/pages/Easters'));

const App: FC = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
    <Layout>
      <Suspense fallback={(
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: '#5E0CC3',
        }}
        >
          <Ripple color="#FDCE0A" />
        </div>
          )}
      >
        <Switch>
          <Route path={ROUTES.EASTERS} exact component={EastersPage} />
          <Route path={ROUTES.HOME} exact component={HomePage} />
        </Switch>
      </Suspense>
    </Layout>
  </>
);

export default App;
