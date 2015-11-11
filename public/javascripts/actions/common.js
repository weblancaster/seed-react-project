'use strict';

import * as types from '../constants/actionTypes';

export function setVisibility(val) {
  return {
    type: 'IS_VISIBLE',
    isVisible: val
  }
}