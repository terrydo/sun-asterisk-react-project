/*
 *
 * AuthenticationPage actions
 *
 */

import { LOGIN_ACTION, LOGIN_SUCCESS } from './constants';

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
