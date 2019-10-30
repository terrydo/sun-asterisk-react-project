import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homeMoviesRecommended state domain
 */

const selectHomeMoviesRecommendedDomain = state =>
  state.homeMoviesRecommended || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeMoviesRecommended
 */

const makeSelectHomeMoviesRecommended = () =>
  createSelector(
    selectHomeMoviesRecommendedDomain,
    substate => substate,
  );

export default makeSelectHomeMoviesRecommended;
export { selectHomeMoviesRecommendedDomain };
