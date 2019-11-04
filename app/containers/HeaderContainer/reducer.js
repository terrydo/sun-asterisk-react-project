/*
 *
 * HeaderContainer reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  FETCHING_MOVIES_SUCCESS,
  FETCHING_SINGLE_MOVIE_SUCCESS,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const headerContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case FETCHING_MOVIES_SUCCESS:
        draft.movies = action.payload;
        break;
      case FETCHING_SINGLE_MOVIE_SUCCESS:
        draft.singleMovie = action.payload;
        break;
    }
  });

export default headerContainerReducer;
