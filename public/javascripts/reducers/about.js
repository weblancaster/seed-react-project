'use strict';

import * as types from '../constants/actionTypes';

const about = (state = {}, action) => {
  console.log('reducer called', state, action);
  switch ( action.type ) {
    case types.IS_VISIBLE:
      return {
        ...state,
        isVisible: action.isVisible
      };
    default:
      return state;
  }
};

export default about;