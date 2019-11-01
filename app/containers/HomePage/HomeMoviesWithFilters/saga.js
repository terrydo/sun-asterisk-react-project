/* eslint-disable prettier/prettier */
import { call, put, takeEvery } from 'redux-saga/effects';

import { requests } from 'services/requests';
import { getHomeMoviesSuccessAction, searchMoviesSuccessAction } from './actions';
import { SEARCH_MOVIES } from './constants';

const getMovies = () => requests.get({
  url: `/movies?sort=2`,
})

const searchMovies = payload => requests.get({
  url: `/search?search=${payload.search}`,
})

function* doSearchMovies({ payload }) {
  const { data } = yield call(searchMovies, payload);

  if (!data) return;

  data.length = 4;

  yield put(searchMoviesSuccessAction(data));
}

// Individual exports for testing
export default function* homeMoviesWithFiltersSaga() {
  try {
    const response = yield call(getMovies);

    yield put(getHomeMoviesSuccessAction(response.data.data));
  } catch (err) {
    alert(err);
  }

  yield takeEvery(SEARCH_MOVIES, doSearchMovies)
}
