'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux'

// store
import store from './store/store';

// components
import Main from '@components/main';
import Home from '@components/home/home';
import About from '@components/about/about';
import Contact from '@components/contact/contact';

render((
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>
  </Provider>
    ),
  document.querySelector('#app')
);

