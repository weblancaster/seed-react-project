'use strict';

import * as types from '../constants/actionTypes';

export const mainTitle = (state = '', action) => {
  switch ( action.type ) {
    case types.GET_MESSAGE:
      return 'React Stack';
    default:
      return state;
  }
};

export const mainDescription = (state = '', action) => {
  switch ( action.type ) {
    case types.GET_MESSAGE:
      return 'Welcome to React Stack';
    default:
      return state;
  }
};