import { all } from 'redux-saga/effects';

import userActionsSaga from 'pages/login/sagas';

export default function* rootSaga() {
  yield all([userActionsSaga()]);
}
