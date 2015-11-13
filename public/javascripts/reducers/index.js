'use strict';

import React from 'react';
import { combineReducers } from 'redux';

// reducers
import * as reducers from './common';

const combinedReducers = combineReducers(reducers);

export default combinedReducers;