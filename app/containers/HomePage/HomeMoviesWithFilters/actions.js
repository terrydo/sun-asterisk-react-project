/*
 *
 * HomeMoviesWithFilters actions
 *
 */

import {
  GET_HOME_MOVIES_SUCCESS,
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
} from './constants';

export function getHomeMoviesSuccessAction(payload) {
  return {
    type: GET_HOME_MOVIES_SUCCESS,
    payload,
  };
}

export function searchMoviesAction(payload) {
  return {
    type: SEARCH_MOVIES,
    payload,
  };
}

export function searchMoviesSuccessAction(payload) {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    payload,
  };
}
