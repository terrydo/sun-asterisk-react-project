/*
 *
 * SingleMoviePage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_SINGLE_MOVIE,
  GET_SINGLE_MOVIE_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getSingleMovieAction(payload) {
  return {
    type: GET_SINGLE_MOVIE,
    payload,
  };
}

export function getSingleMovieSuccessAction(payload) {
  return {
    type: GET_SINGLE_MOVIE_SUCCESS,
    payload,
  };
}
