import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Dashboard, Settings } from './containers';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/settings" component={Settings} />
  </Route>
);
