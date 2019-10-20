import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authenticationPage state domain
 */

const selectAuthenticationPageDomain = state =>
  state.authenticationPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthenticationPage
 */

const makeSelectAuthenticationPage = () =>
  createSelector(
    selectAuthenticationPageDomain,
    substate => substate,
  );

export default makeSelectAuthenticationPage;
export { selectAuthenticationPageDomain };
