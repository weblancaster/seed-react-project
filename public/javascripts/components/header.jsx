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
        <ul className="nav">
          <li className="nav_item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_item">
            <Link to="/intro">Intro</Link>
          </li>
          <li className="nav_item">
            <Link to="/plugins">Plugins</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;