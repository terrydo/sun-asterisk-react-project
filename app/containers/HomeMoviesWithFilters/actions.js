/*
 *
 * HomeMoviesWithFilters actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export function fetchingMoviesSuccessAction(payload) {
  return {
    type: DEFAULT_ACTION,
    payload,
  };
}
