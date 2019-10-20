import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { requests } from 'services/requests';
import { REGISTER_ACTION } from './constants';

const register = payload =>
  requests.post({
    url: `/register`,
    data: payload,
  });

function* doRegister({ payload }) {
  console.log('do register');

  const response = yield call(register, payload);

  if (response.data.error) {
    alert(response.data.error);
  } else {
    alert('Registered!');
    yield put(push('/login'));
  }
}

// Individual exports for testing
export default function* registerPageSaga() {
  yield takeLatest(REGISTER_ACTION, doRegister);
}
