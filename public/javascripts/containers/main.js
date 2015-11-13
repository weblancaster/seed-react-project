'use strict';

import React, { Component } from 'react';
import Header from '../components/header';

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

export default Main;