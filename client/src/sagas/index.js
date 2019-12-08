import { all } from 'redux-saga/effects';
import usersSaga from '../containers/Table/saga';

export default function* rootSaga() {
  yield all([usersSaga()]);
}
