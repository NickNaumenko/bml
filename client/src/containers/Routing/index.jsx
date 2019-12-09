import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../../routes';

const Routing = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.home.path} component={routes.home.component} />
      <Route path={routes.users.path} component={routes.users.component} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
