/*
 *
 * SingleMoviePage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_SINGLE_MOVIE_SUCCESS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const singleMoviePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_SINGLE_MOVIE_SUCCESS:
        draft.singleMovie = action.payload;
        break;
    }
  });

export default singleMoviePageReducer;
