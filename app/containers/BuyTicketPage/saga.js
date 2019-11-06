import { call, put, takeLatest } from 'redux-saga/effects';
import { requests } from 'services/requests';
import { getSeatSuccessAction } from './actions';
import { GET_SEAT } from './constants';

const getSeat = payload => {
  const { movieId } = payload;

  if (!movieId) return null;

  return requests.get({
    url: `/bookable_seat/${movieId}`,
  });
};

function* doGetSeat({ payload }) {
  const seat = yield call(getSeat, payload);

  yield put(getSeatSuccessAction(JSON.parse(seat.data.available_seat)));
}

// Individual exports for testing
export default function* buyTicketPageSaga() {
  yield takeLatest(GET_SEAT, doGetSeat);
}
