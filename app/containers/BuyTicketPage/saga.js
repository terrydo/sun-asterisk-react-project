import { call, put, takeLatest } from 'redux-saga/effects';
import { requests } from 'services/requests';
import {
  getSeatSuccessAction,
  setSelectingSeatAction,
  getUserSuccessAction,
} from './actions';
import { GET_SEAT } from './constants';

const getSeat = payload => {
  const { movieId } = payload;

  if (!movieId) return null;

  return requests.get({
    url: `/bookable_seat/${movieId}`,
  });
};

const getUser = () =>
  requests.get({
    url: `/user`,
  });

function* doGetSeat({ payload }) {
  const seat = yield call(getSeat, payload);

  const availableSeat = JSON.parse(seat.data.available_seat);

  yield put(getSeatSuccessAction(availableSeat));
  yield put(setSelectingSeatAction(availableSeat));

  const user = yield call(getUser);

  yield put(getUserSuccessAction(user.data));
}

// Individual exports for testing
export default function* buyTicketPageSaga() {
  yield takeLatest(GET_SEAT, doGetSeat);
}
