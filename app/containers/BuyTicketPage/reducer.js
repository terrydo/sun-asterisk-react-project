/*
 *
 * BuyTicketPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_SEAT_SUCCESS } from './constants';

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
    }
  });

export default buyTicketPageReducer;
