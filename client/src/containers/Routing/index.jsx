import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../../scenes/MainPage';
import StatisticPage from '../../scenes/StatisticPage';

const Routing = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/users' component={StatisticPage} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
