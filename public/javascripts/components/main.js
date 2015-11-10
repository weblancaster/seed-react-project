'use strict';

import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import { createStore, combineReducers } from 'redux';

// store
import store from '../store/store';

//components
import Header from './common/header';

store.dispatch({
  type: 'GET',
  isVisible: false
});

console.log(store.getState())

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Main;