import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the footerContainer state domain
 */

const selectFooterContainerDomain = state =>
  state.footerContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FooterContainer
 */

const makeSelectFooterContainer = () =>
  createSelector(
    selectFooterContainerDomain,
    substate => substate,
  );

export default makeSelectFooterContainer;
export { selectFooterContainerDomain };
