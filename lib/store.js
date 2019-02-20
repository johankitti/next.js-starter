import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import apiMiddleware from './apimiddleware';
import showsReducer from '../ducks/shows';

const reducers = combineReducers({
  showsReducer,
});

export function initializeStore(initialState = {}) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(apiMiddleware, thunkMiddleware)));
}
