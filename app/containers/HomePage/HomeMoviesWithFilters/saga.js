/* eslint-disable prettier/prettier */
import { call, put } from 'redux-saga/effects';

import { requests } from 'services/requests';
import { getHomeMoviesSuccessAction } from './actions';


const getMovies = () => requests.get({
  url: `/movies?sort=2`,
})

// Individual exports for testing
export default function* homeMoviesWithFiltersSaga() {
  try {
    const response = yield call(getMovies);

    yield put(getHomeMoviesSuccessAction(response.data.data));
  } catch (err) {
    alert(err);
  }
}
