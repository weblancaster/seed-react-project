'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';
import * as actionCreators from '../actions/common';

class About extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.dispatch(actionCreators.fetchContent('intro'));
  }

  render () {
    let { content } = this.props;

    return (
      <div className="markdown-body" dangerouslySetInnerHTML={{__html: content}} />
    )
  }
}

export default connect((state) => {
  let { fetchContent } = state;
  return {
    content: fetchContent.content
  }
})(About);

