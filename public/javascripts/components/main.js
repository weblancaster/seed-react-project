'use strict';

import React, { Component } from 'react';
import { RouteHandler } from 'react-router';

import Header from './common/header';

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