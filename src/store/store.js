import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

// @REMOTE REDUCERS
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import {getUsers} from '../Actions/PlaceHolderApiActions';

const logger = createLogger();

export default function configStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger, thunk),
        compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
    );

    store.dispatch(getUsers());

    return  store;
}