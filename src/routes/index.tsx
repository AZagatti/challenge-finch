import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { prerenderedLazy } from '@utils/prerenderedLazy';

const Home = prerenderedLazy(() => import('@pages/Home'));
const Details = prerenderedLazy(() => import('@pages/Details'));
const GenericNotFound = prerenderedLazy(() => import('@pages/GenericNotFound'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
