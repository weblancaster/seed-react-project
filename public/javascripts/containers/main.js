'use strict';

import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import { connect } from 'react-redux';

//components
import Header from '../components/header';

// store
import configureStore from '../store/configureStore';
import { setVisibility } from '../actions/common'

const store = configureStore();

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    let { store } = this.props;

    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default connect((state/*, props*/) => {
  // This is our select function that will extract from the state the data slice we want to expose
  // through props to our component.
  return {
    store: state
  }
})(Main);