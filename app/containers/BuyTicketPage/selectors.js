import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the buyTicketPage state domain
 */

const selectBuyTicketPageDomain = state => state.buyTicketPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BuyTicketPage
 */

const makeSelectBuyTicketPage = () =>
  createSelector(
    selectBuyTicketPageDomain,
    substate => substate,
  );

export default makeSelectBuyTicketPage;
export { selectBuyTicketPageDomain };
