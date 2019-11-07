/*
 *
 * BuyTicketPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_SEAT_SUCCESS,
  SET_SELECTING_SEAT,
  GET_USER_SUCCESS,
  SET_SERVER_SELECTING_SEAT,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const buyTicketPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_SEAT_SUCCESS:
        draft.seats = action.payload;
        break;
      case SET_SELECTING_SEAT:
        draft.selectingSeats = action.payload;
        break;
      case SET_SERVER_SELECTING_SEAT:
        draft.serverSelectingSeats = action.payload;
        break;
      case GET_USER_SUCCESS:
        draft.user = action.payload;
        break;
    }
  });

export default buyTicketPageReducer;
