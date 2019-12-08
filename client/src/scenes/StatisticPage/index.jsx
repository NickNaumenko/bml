import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Table from '../../containers/Table';
import UserPage from '../UserPage';

const StatisticPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={path} component={Table} />
          <Route path={`${path}/:id`} component={UserPage} />
        </Switch>
      </div>
      <Footer />
    </>
  )
};

export default StatisticPage;
