/*
 *
 * BuyTicketPage actions
 *
 */

import { DEFAULT_ACTION, GET_SEAT, GET_SEAT_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getSeatAction(payload) {
  return {
    type: GET_SEAT,
    payload,
  };
}

export function getSeatSuccessAction(payload) {
  return {
    type: GET_SEAT_SUCCESS,
    payload,
  };
}
