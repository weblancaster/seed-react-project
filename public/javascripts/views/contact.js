'use strict';

import React, { Component } from 'react';

class Contact extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <form action="">
        <label>
          <input type="text" placeholder="name" />
        </label>
        <label>
          <input type="email" placeholder="email" />
        </label>
      </form>
    )
  }
}

export default Contact;
