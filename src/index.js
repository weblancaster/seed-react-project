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
            <Route path="/" component={Main}>
                <IndexRoute component={Feat1} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>
    </Provider>),
    document.querySelector('#app')
);
