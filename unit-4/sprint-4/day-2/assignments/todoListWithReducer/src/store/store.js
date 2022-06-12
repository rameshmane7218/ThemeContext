

import {legacy_createStore,compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './todo/todo.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(todoReducer, composeEnhancers(applyMiddleware(thunk)));


