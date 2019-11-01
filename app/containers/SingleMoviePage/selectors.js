import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the singleMoviePage state domain
 */

const selectSingleMoviePageDomain = state =>
  state.singleMoviePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SingleMoviePage
 */

const makeSelectSingleMoviePage = () =>
  createSelector(
    selectSingleMoviePageDomain,
    substate => substate,
  );

export default makeSelectSingleMoviePage;
export { selectSingleMoviePageDomain };
