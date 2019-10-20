import { call, takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { requests } from 'services/requests';
import { LOGIN_ACTION } from './constants';
import { loginSuccess } from './actions';

const login = payload =>
  requests.post({
    url: `/login`,
    data: payload,
  });

function* doLogin({ payload }) {
  console.log('do login');

  const response = yield call(login, payload);

  if (response.data.error) {
    alert(response.data.error);
  } else {
    yield put(loginSuccess(response.data.access_token));
    yield put(push('/'));
  }
}

export default function* authenticationPageSaga() {
  yield takeLatest(LOGIN_ACTION, doLogin);
}
