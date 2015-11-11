'use strict';

import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import { createStore, combineReducers } from 'redux';

//components
import Header from '../components/header';

// store
import configureStore from '../store/configureStore';
import { setVisibility } from '../actions/common'

const store = configureStore();

store.dispatch(setVisibility(true));

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