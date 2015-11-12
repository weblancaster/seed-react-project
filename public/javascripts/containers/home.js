'use strict';

import React, { Component } from 'react';

import Welcome from '../components/welcome';
import Message from '../components/message';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    title: 'React Stack',
    msg: 'Welcome to React Stack'
  };

  render () {
    return (
      <div>
        <Welcome title={this.props.title} />
        <Message msg={this.props.msg} />
      </div>
    )
  }
}

export default Home;