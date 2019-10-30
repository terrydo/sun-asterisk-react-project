/* eslint-disable prettier/prettier */
import { call, put, takeLatest } from 'redux-saga/effects';

import { requests } from 'services/requests';
import * as action from './actions';
import { DEFAULT_ACTION } from './constants';

const getMovies = () => requests.get({
  url: `/movies?sort=2`,
})

function* doGetMovies() {
  try {
    const response = yield call(getMovies);
    yield put(action.fetchingMoviesSuccessAction(response.data.data));
  } catch (err) {
    alert(err);
  }
}

// Individual exports for testing
export default function* homeMoviesWithFiltersSaga() {
  yield takeLatest(DEFAULT_ACTION, doGetMovies);
}
