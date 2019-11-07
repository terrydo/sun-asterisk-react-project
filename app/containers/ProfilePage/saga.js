import { call, put, takeLatest } from 'redux-saga/effects';
import { requests } from 'services/requests';
import { UPDATE_PROFILE, SUCCESS_MESSAGE } from './constants';
import { getUserSuccessAction } from './actions';

const getUser = () =>
  requests.get({
    url: `/user`,
  });

function* updateProfile({ payload }) {
  const result = yield requests.post({
    url: '/user/update',
    data: payload,
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
  });

  yield put({
    type: SUCCESS_MESSAGE,
    payload: {
      message: result.data.message,
    },
  });
}

// Individual exports for testing
export default function* profilePageSaga() {
  // See example in containers/HomePage/saga.js
  const user = yield call(getUser);

  yield put(getUserSuccessAction(user.data));

  yield takeLatest(UPDATE_PROFILE, updateProfile);
}
