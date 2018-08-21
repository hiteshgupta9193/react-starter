import _ from 'lodash';
import { takeLatest, put, call, select, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions, selectors, types } from 'reducers/user';
import { validateAuth, setLocalStorage, clearLocalStorage } from 'utils/auth';

export function* loginWorker(action) {
  const {
    payload: { username, password }
  } = action;

  const { loginSuccess, loginError, loginReset } = actions;
  const { success, errorMessage, user } = validateAuth(username, password);

  yield delay(Math.floor((Math.random() * 2 + 1) * 1000));

  if (success) {
    yield call(setLocalStorage, _.get(user, 'authToken'));
    yield put(loginSuccess(_.omit(user, 'authToken')));
  } else {
    yield put(loginError(errorMessage));
    yield delay(3000);
    yield put(loginReset());
  }
}

export function* logoutWorker() {
  const { logoutSuccess, logoutError, logoutReset } = actions;

  yield delay(Math.floor((Math.random() * 2 + 1) * 1000));
  yield call(clearLocalStorage);
  yield put(logoutSuccess());
}

function* login() {
  yield takeLatest(types.LOGIN.FETCH, loginWorker);
}
function* logout() {
  yield takeLatest(types.LOGOUT.FETCH, logoutWorker);
}

export default function* rootSaga() {
  yield all([login(), logout()]);
}
