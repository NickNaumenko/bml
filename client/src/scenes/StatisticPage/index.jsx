import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Table from '../../containers/Table';
import routes from '../../routes';

const StatisticPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={path} component={Table} />
          <Route path={routes.userPage.path} component={routes.userPage.component} />
        </Switch>
      </div>
      <Footer />
    </>
  )
};

export default StatisticPage;
