'use strict';

import React from 'react';
import { createStore, combineReducers } from 'redux';

// reducers combined
import reducers from '../reducers/index'

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState);
  return store;
}