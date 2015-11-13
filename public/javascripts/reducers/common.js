'use strict';

import * as types from '../constants/actionTypes';

export const fetchContent = (state = {}, action) => {
  switch ( action.type ) {
    case types.FETCH_CONTENT:
      return {
        content: action.content
      }
    default:
      return state;
  }
};