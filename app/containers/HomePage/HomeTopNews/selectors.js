import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homeTopNews state domain
 */

const selectHomeTopNewsDomain = state => state.homeTopNews || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeTopNews
 */

const makeSelectHomeTopNews = () =>
  createSelector(
    selectHomeTopNewsDomain,
    substate => substate,
  );

export default makeSelectHomeTopNews;
export { selectHomeTopNewsDomain };
