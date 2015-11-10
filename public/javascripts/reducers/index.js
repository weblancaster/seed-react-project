'use strict';

import React from 'react';
import { combineReducers } from 'redux';

// reducers
import about from './about';
import common from './common';

const reducers = combineReducers({
  about: about,
  common: common
});

export default reducers;