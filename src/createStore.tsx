import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, RootState } from './reducers';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = (
    process.env.NODE_ENV === 'development' &&
    composeWithDevTools
) || compose;

function configureStore( initialState?: RootState ) {
    // configure middlewares
    const middlewares = [
        thunk
    ];
    // compose enhancers
    const enhancer = composeEnhancers(
        applyMiddleware( ...middlewares ),
    );
    // create store
    return createStore(
        rootReducer,
        enhancer
    );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;