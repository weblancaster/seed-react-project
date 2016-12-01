import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

// store
import configureStore from './shared/index.store';

// components
import Main from './core/main.component';
import NotFound from './core/notFound.component';
import Feat1 from './feat1/feat1.container';

const store = configureStore();

render(
    (<Provider store={store}>
        <Router history={browserHistory}>
            <Route component={Main} path="/">
                <IndexRoute component={Feat1} />
            </Route>
            <Route component={NotFound} path="*" />
        </Router>
    </Provider>),
    document.querySelector('#app')
);
