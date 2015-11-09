'use strict';

import React, { Component } from 'react';

class Message extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <p>{this.props.msg}</p>
    )
  }
}

export default Message;