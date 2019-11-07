/*
 *
 * ProfilePage reducer
 *
 */
import produce from 'immer';
import { GET_USER_SUCCESS, SUCCESS_MESSAGE } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const profilePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER_SUCCESS:
        draft.user = action.payload;
        break;
      case SUCCESS_MESSAGE:
        draft.successMessage = action.payload.message;
        break;
    }
  });

export default profilePageReducer;
