'use strict';

import React, { Component } from 'react';

import Welcome from '../components/welcome';
import Message from '../components/message';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    title: 'React Stack starter kit',
    msg: 'Welcome to React Stack starter kit, navigate to links to know more about the project.',
    subMsg: 'To facilitate the contribution to this project documentation, Intro and Plugins view are markdown files which are transformed to HTML when the ENDPOINT is called. These files live inside docs folder (head to intro to learn more about the project architecture)',
    link: 'https://github.com/weblancaster/node-react-stack-kit'
  };

  render () {
    return (
      <div className="markdown-body">
        <Welcome title={this.props.title} />
        <Message msg={this.props.msg} subMsg={this.props.subMsg} />
        <p>Visit the <a href={this.props.link}>repository</a> for code.</p>
      </div>
    )
  }
}

export default Home;