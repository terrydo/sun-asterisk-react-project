/* eslint-disable prettier/prettier */
import { call, put, takeLatest } from 'redux-saga/effects';

import { requests } from 'services/requests';
import * as action from './actions';

const getMovies = () => requests.get({
  url: `/movies`,
})

export default function* headerContainerSaga() {
  try {
    const response = yield call(getMovies);
    yield put(action.fetchingMoviesSuccessAction(response.data.data));
  } catch (err) {
    alert(err);
  }
}
