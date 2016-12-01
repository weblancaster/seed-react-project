import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// combined reducers
import reducers from '../shared/index.reducer';

let logger, store;

export default function configureStore(initialState) {
    if ( process.env.NODE_ENV === 'development' ) {
        logger = createLogger();

        store = createStore(reducers, initialState, applyMiddleware(
            thunk,
            logger
        ));

    } else {
        store = createStore(reducers, initialState, applyMiddleware(
            thunk
        ));
    }

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../', () => {
            const nextReducer = require('../');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
