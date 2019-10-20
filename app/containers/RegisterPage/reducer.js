/*
 *
 * RegisterPage reducer
 *
 */
import produce from 'immer';
import { REGISTER_ACTION } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const registerPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case REGISTER_ACTION:
        break;
    }
  });

export default registerPageReducer;
