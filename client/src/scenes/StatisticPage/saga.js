import { takeEvery, put, call, all } from 'redux-saga/effects';
import { fetchUsers } from './actions';
import * as usersService from '../../services/usersService';

function* fetchUsersFromServer({ payload }) {
  try {
    yield put(fetchUsers.request());
    const users = yield call(usersService.getUsers, payload);
    yield put(fetchUsers.success(users));
  } catch (error) {
    yield put(fetchUsers.failure(error.message));
  } finally {
    yield put(fetchUsers.fulfill());
  }
}

function* watchFetchUsers() {
  yield takeEvery(fetchUsers.TRIGGER, fetchUsersFromServer);
}

export default function* usersSaga() {
  yield all([watchFetchUsers()]);
}
