import { call, put, takeLatest } from 'redux-saga/effects';

import { requests } from 'services/requests';
import {
  getHomeMoviesSuccessAction,
  searchMoviesSuccessAction,
  filterMoviesSuccessAction,
} from './actions';
import { SEARCH_MOVIES, FILTER_MOVIES } from './constants';

const getMovies = () =>
  requests.get({
    url: `/movies`,
  });

const filterMovies = payload => {
  const { type, page } = payload;

  console.log(type, page, payload);

  return requests.get({
    url: `/movies`,
    params: {
      sort: type,
      page,
    },
  });
};

const searchMovies = payload =>
  requests.get({
    url: `/search?search=${payload.search}`,
  });

function* doSearchMovies({ payload }) {
  const { data } = yield call(searchMovies, payload);

  if (!data) return;

  const { page } = payload;

  data.length = 12 + (page - 1) * 8 || 12;

  yield put(searchMoviesSuccessAction(data));
}

function* doFilterMovies({ payload }) {
  const movies = yield call(filterMovies, payload);
  const putData = movies.data.data;

  const { append } = payload;
  putData.append = append;

  yield put(filterMoviesSuccessAction(putData));
}

// Individual exports for testing
export default function* homeMoviesWithFiltersSaga() {
  try {
    const response = yield call(getMovies);

    yield put(getHomeMoviesSuccessAction(response.data.data));
  } catch (err) {
    alert(err);
  }

  yield takeLatest(SEARCH_MOVIES, doSearchMovies);
  yield takeLatest(FILTER_MOVIES, doFilterMovies);
}
