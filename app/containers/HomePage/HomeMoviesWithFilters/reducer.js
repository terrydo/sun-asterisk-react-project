/*
 *
 * HomeMoviesWithFilters reducer
 *
 */
import produce from 'immer';
import {
  GET_HOME_MOVIES_SUCCESS,
  SEARCH_MOVIES_SUCCESS,
  FILTER_MOVIES_SUCCESS,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homeMoviesWithFiltersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_HOME_MOVIES_SUCCESS:
        draft.homeMovies = action.payload;
        break;
      case SEARCH_MOVIES_SUCCESS:
        draft.homeMovies = action.payload;
        break;
      case FILTER_MOVIES_SUCCESS:
        if (action.payload.append) {
          draft.homeMovies = [...state.homeMovies, ...action.payload];
        } else {
          draft.homeMovies = action.payload;
        }
        break;
    }
  });

export default homeMoviesWithFiltersReducer;
