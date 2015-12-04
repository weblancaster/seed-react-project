'use strict';

import * as types from '../constants/actionTypes';

const initialState = {};

export const fetchContent = (state = initialState, action) => {
  switch ( action.type ) {
    case types.FETCH_CONTENT:
      return Object.assign({}, state, {
        content: action.content
      });
    default:
      return state;
  }
};