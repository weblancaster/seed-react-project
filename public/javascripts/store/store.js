'use strict';

import React from 'react';
import { createStore, combineReducers } from 'redux';

// reducers combined
import reducers from '../reducers/index'

const store = createStore(reducers);

export default store;