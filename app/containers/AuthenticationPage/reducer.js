/*
 *
 * AuthenticationPage reducer
 *
 */
import produce from 'immer';
import { LOGIN_SUCCESS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const authenticationPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        alert('Login successfully!');
        localStorage.setItem('ACCESS_TOKEN', action.payload);
        break;
    }
  });

export default authenticationPageReducer;
