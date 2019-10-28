/*
 *
 * HomeMoviesWithFilters reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  homeMovies: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeMoviesWithFiltersReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        state.homeMovies = action.payload;
        break;
    }
  });

export default homeMoviesWithFiltersReducer;
