/*
 *
 * ProfilePage actions
 *
 */

import { GET_USER_SUCCESS, UPDATE_PROFILE } from './constants';

export function getUserSuccessAction(payload) {
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
}

export function updateProfileAction(payload) {
  return {
    type: UPDATE_PROFILE,
    payload,
  };
}
