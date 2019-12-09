import MainPage from '../scenes/MainPage';
import StatisticPage from '../scenes/StatisticPage';
import UserPage from '../scenes/UserPage';

export default {
  home: {
    path: '/',
    name: 'Main page',
    component: MainPage,
  },
  users: {
    path: '/users',
    name: 'Users statistics',
    component: StatisticPage,
  },
  userPage: {
    path: '/users/:id',
    name: 'User page',
    component: UserPage,
  },
};