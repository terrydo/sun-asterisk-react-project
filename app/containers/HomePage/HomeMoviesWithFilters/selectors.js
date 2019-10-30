import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homeMoviesWithFilters state domain
 */

const selectHomeMoviesWithFiltersDomain = state =>
  state.homeMoviesWithFilters || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeMoviesWithFilters
 */

const makeSelectHomeMoviesWithFilters = () =>
  createSelector(
    selectHomeMoviesWithFiltersDomain,
    substate => substate,
  );

export default makeSelectHomeMoviesWithFilters;
export { selectHomeMoviesWithFiltersDomain };
