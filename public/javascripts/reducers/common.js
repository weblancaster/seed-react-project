'use strict';

import * as types from '../constants/actionTypes';

const initialState = {};

export default function content(state = initialState, action) {
  switch ( action.type ) {
    case types.FETCH_CONTENT:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
};