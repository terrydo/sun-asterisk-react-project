/*
 *
 * HomeTopNews reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  news: [
    {
      id: 1,
      title: 'The Boss Baby Earns 200 million',
      excerpt:
        'Dolore quis ipsum qui sunt ipsum id commodo quis culpa do. Ex sunt eiusmod non minim excepteur aute dolor dolor...',
      thumbnailUrl: 'https://i.ytimg.com/vi/tquIfapGVqs/maxresdefault.jpg',
      publishDate: 'January 20, 2018',
    },
    {
      id: 2,
      title: 'Angry Bird is going to be a super hit movie',
      excerpt:
        'Dolore quis ipsum qui sunt ipsum id commodo quis culpa do. Ex sunt eiusmod non minim excepteur aute dolor dolor. Proident excepteur quis amet cupidatat laboris id adipisicing nostrud id sit exercitation.',
    },
    {
      id: 3,
      title: 'Angry Bird is going to be a super hit movie',
      excerpt:
        'Dolore quis ipsum qui sunt ipsum id commodo quis culpa do. Ex sunt eiusmod non minim excepteur aute dolor dolor. Proident excepteur quis amet cupidatat laboris id adipisicing nostrud id sit exercitation.',
    },
    {
      id: 4,
      title: 'Angry Bird is going to be a super hit movie',
      excerpt:
        'Dolore quis ipsum qui sunt ipsum id commodo quis culpa do. Ex sunt eiusmod non minim excepteur aute dolor dolor. Proident excepteur quis amet cupidatat laboris id adipisicing nostrud id sit exercitation.',
    },
  ],
};

/* eslint-disable default-case, no-param-reassign */
const homeTopNewsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default homeTopNewsReducer;
