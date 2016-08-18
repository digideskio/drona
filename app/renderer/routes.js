import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Video from './containers/Video';
import Dashboard from './containers/Dashboard';
import Settings from './containers/Settings';

export default (
  <Route path="/" component={Video}>
    <IndexRoute component={Dashboard} />
    <Route path="/settings" component={Settings} />
  </Route>
);
