'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Header from '@components/common/header';

describe('test', () => {
  let header;

  beforeEach(() => {
    header = TestUtils.renderIntoDocument(<Header />)
  });

  it('rendered header', () => {

    expect(ReactDOM.findDOMNode(header).className).to.be.equal('header');
  })
});