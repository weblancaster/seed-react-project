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
            <Link to="/intro">Intro</Link>
          </li>
          <li>
            <Link to="/plugins">Plugins</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;