import React from 'react';
import Routing from '../../containers/Routing';
import { Provider } from 'react-redux';
import store from '../../store';

const Home = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
);

export default Home;
