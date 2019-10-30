/*
 *
 * HomeMoviesRecommended reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homeMoviesRecommendedReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.recommendedMovies = action.payload;
        break;
    }
  });

export default homeMoviesRecommendedReducer;
