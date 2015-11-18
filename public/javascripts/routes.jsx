'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux'

// store
import configureStore from './store/configureStore';

// components
import Main from './containers/main';
import Home from './containers/home';
import Intro from './containers/intro';
import Plugins from './containers/plugins';

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="intro" component={Intro} />
        <Route path="plugins" component={Plugins} />
      </Route>
    </Router>
  </Provider>),
  document.querySelector('#app')
);

