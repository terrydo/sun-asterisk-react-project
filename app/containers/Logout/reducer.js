/*
 *
 * Logout reducer
 *
 */
import produce from 'immer';
import { LOGOUT } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const logoutReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOGOUT:
        localStorage.removeItem('ACCESS_TOKEN');
        break;
    }
  });

export default logoutReducer;
