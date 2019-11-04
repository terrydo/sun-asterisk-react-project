/*
 *
 * HeaderContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCHING_MOVIES_SUCCESS,
  FETCHING_MOVIES_ERROR,
  FETCHING_SINGLE_MOVIE,
  FETCHING_SINGLE_MOVIE_SUCCESS,
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

export function fetchingSingleMovieAction(payload) {
  return {
    type: FETCHING_SINGLE_MOVIE,
    payload,
  };
}

export function fetchingSingleMovieSuccessAction(payload) {
  return {
    type: FETCHING_SINGLE_MOVIE_SUCCESS,
    payload,
  };
}
