'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Welcome from './common/welcome';
import Message from './common/message';

class Main extends Component {
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

ReactDOM.render(
    <Main />,
    document.body
);