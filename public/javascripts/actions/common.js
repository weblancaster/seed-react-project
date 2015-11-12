'use strict';

import * as types from '../constants/actionTypes';

export function setVisibility(val) {
  return (dispatch, state) => {
    return {
      type: 'IS_VISIBLE',
      isVisible: val
    }
  }
}