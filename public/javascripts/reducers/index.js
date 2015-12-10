'use strict';

import React from 'react';
import { combineReducers } from 'redux';

// reducers
import content from './common';

const combinedReducers = combineReducers({
  content
});

export default combinedReducers;