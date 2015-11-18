'use strict';

import React, { Component } from 'react';

class Message extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
      	<p>{this.props.msg}</p>
      	<p>{this.props.subMsg}</p>
      </div>
    )
  }
}

export default Message;