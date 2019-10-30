/*
 *
 * HomeMoviesWithFilters actions
 *
 */

import { GET_HOME_MOVIES_SUCCESS } from './constants';

export function getHomeMoviesSuccessAction(payload) {
  return {
    type: GET_HOME_MOVIES_SUCCESS,
    payload,
  };
}
