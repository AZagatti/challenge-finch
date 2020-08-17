import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loader from '@components/Loader';

import { prerenderedLazy } from '@utils/prerenderedLazy';

const Home = prerenderedLazy(() => import('@pages/Home'));
const Exclusives = prerenderedLazy(() => import('@pages/Exclusives'));
const Promotions = prerenderedLazy(() => import('@pages/Promotions'));
const Favorites = prerenderedLazy(() => import('@pages/Favorites'));
const Details = prerenderedLazy(() => import('@pages/Details'));
const GenericNotFound = prerenderedLazy(() => import('@pages/GenericNotFound'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/exclusives" component={Exclusives} />
        <Route path="/promotions" component={Promotions} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/details" component={Details} />

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
