'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <nav className="header">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;