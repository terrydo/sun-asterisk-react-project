/*
 *
 * HomeMoviesRecommended actions
 *
 */

import { DEFAULT_ACTION } from './constants';

export function defaultAction(movies) {
  return {
    type: DEFAULT_ACTION,
    payload: movies,
  };
}
