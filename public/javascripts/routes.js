'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

// components
import Main from '@components/main';
import Home from '@components/common/home';
import About from '@components/about/about';
import Contact from '@components/contact/contact';

render((
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router> ),
  document.querySelector('#app')
);

