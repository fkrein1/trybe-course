// src/store/index.js
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({ clickReducer });
const store = createStore( rootReducer, composeWithDevTools());


export default store;