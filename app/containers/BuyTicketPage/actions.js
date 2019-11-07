/*
 *
 * BuyTicketPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_SEAT,
  GET_SEAT_SUCCESS,
  SET_SELECTING_SEAT,
  GET_USER_SUCCESS,
  SET_SERVER_SELECTING_SEAT,
} from './constants';

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

export function setSelectingSeatAction(payload) {
  return {
    type: SET_SELECTING_SEAT,
    payload,
  };
}

export function getUserSuccessAction(payload) {
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
}

export function setServerSelectingSeatAction(payload) {
  return {
    type: SET_SERVER_SELECTING_SEAT,
    payload,
  };
}
