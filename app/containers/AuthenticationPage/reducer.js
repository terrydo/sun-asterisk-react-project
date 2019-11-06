/*
 *
 * AuthenticationPage reducer
 *
 */
import produce from 'immer';
import { LOGOUT, LOGIN_SUCCESS, GET_USER_PROFILE_SUCCESS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const authenticationPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        alert('Login successfully!');
        draft.accessToken = action.payload;
        localStorage.setItem('ACCESS_TOKEN', action.payload);
        break;
      case GET_USER_PROFILE_SUCCESS:
        draft.user = action.payload;
        break;
      case LOGOUT:
        console.log('WRYYYYY');
        localStorage.removeItem('ACCESS_TOKEN');
        draft = initialState;
        break;
    }
  });

export default authenticationPageReducer;
