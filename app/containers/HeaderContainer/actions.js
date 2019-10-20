/*
 *
 * HeaderContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCHING_MOVIES_SUCCESS,
  FETCHING_MOVIES_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchingMoviesSuccessAction(payload) {
  return {
    type: FETCHING_MOVIES_SUCCESS,
    payload,
  };
}

export function fetchingMoviesErrorAction() {
  return {
    type: FETCHING_MOVIES_ERROR,
  };
}
