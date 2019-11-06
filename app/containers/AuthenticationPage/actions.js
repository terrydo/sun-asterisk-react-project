/*
 *
 * AuthenticationPage actions
 *
 */

import {
  LOGIN_ACTION,
  LOGIN_SUCCESS,
  GET_USER_PROFILE_SUCCESS,
} from './constants';

export function loginAction(payload) {
  return {
    type: LOGIN_ACTION,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function getUserProfileAction(payload) {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload,
  };
}
