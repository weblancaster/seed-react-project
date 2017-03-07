
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

// store
import configureStore from './shared/index.store';

// components
import Main from './core/main.component';
import NotFound from './core/notFound.component';
import Feat1 from './feat1/feat1.container';

const store = configureStore();

const render = (rootComponent) => {
    console.log('called');
    ReactDom.render(
    <AppContainer key={Math.random()}>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route component={rootComponent} path="/">
                    <IndexRoute component={Feat1} />
                </Route>
                <Route component={NotFound} path="*" />
            </Router>
        </Provider>
    </AppContainer>,
    document.querySelector('#app')
    )
}

render(Main);

if (module.hot) {
    console.log('in hot module');
    module.hot.accept('./core/main.component', () => {
        const nextApp = require('./core/main.component').default
        render(nextApp);
    });
}
