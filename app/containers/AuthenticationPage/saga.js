import { call, takeLatest, put, select } from 'redux-saga/effects';
import { makeSelectLocation } from 'containers/App/selectors';
import { push } from 'react-router-redux';
import { requests } from 'services/requests';
import { LOGIN_ACTION } from './constants';
import { loginSuccess, getUserProfileAction } from './actions';
import routes from 'app-routes';

const login = payload =>
  requests.post({
    url: `/login`,
    data: payload,
  });

const fetchUserData = () =>
  requests.get({
    url: `/user`,
  });

function* doLogin({ payload }) {
  console.log('do login');

  const response = yield call(login, payload);

  if (response.data.error) {
    alert(response.data.error);
    return;
  }

  yield put(loginSuccess(response.data.access_token));

  const userData = yield call(fetchUserData);

  yield put(getUserProfileAction(userData.data));

  const { pathname } = yield select(makeSelectLocation());

  if (pathname === routes.login) {
    yield put(push(routes.home));
  }
  window.location.reload();
}

export default function* authenticationPageSaga() {
  yield takeLatest(LOGIN_ACTION, doLogin);
}
