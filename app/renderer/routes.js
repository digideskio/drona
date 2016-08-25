import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Background from './containers/Background';
import Dashboard from './containers/Dashboard';
import Settings from './containers/Settings';

export default (
  <Route path="/" component={Background}>
    <IndexRoute component={Dashboard} />
    <Route path="/settings" component={Settings} />
  </Route>
);
