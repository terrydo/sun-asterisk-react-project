import { call, put, takeLatest } from 'redux-saga/effects';
import { requests } from 'services/requests';
import { GET_SINGLE_MOVIE } from './constants';
import { getSingleMovieSuccessAction } from './actions';

const getMovie = ({ id }) => {
  if (!id) return null;

  return requests.get({
    url: `/movies/${id}`,
  });
};

function* getSingleMovie({ payload }) {
  console.log('??');

  const response = yield call(getMovie, payload);

  console.log(response);

  yield put(getSingleMovieSuccessAction(response.data));
}

// Individual exports for testing
export default function* singleMoviePageSaga() {
  yield takeLatest(GET_SINGLE_MOVIE, getSingleMovie);
}
