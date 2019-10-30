import { call, put } from 'redux-saga/effects';

import { requests } from 'services/requests';
import { defaultAction } from './actions';

const getRecommendedMovies = () =>
  requests.get({
    url: `/movies?sort=3`,
  });

// Individual exports for testing
export default function* homeMoviesRecommendedSaga() {
  const response = yield call(getRecommendedMovies);

  try {
    const movies = response.data.data;

    yield put(defaultAction(movies));
  } catch (e) {
    alert(e);
  }
}
