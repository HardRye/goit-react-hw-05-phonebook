import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import phonebookReducers from './phonebookReducers';

const rootReducer = combineReducers({
  contacts: phonebookReducers,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
