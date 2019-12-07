import { all } from 'redux-saga/effects';
import usersSaga from '../scenes/StatisticPage/saga';

export default function* rootSaga() {
  yield all([usersSaga()]);
}
