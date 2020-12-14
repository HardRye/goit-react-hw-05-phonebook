// *** before @reduxjs/toolkit

// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import phonebookReducers from './phonebookReducers';
// const rootReducer = combineReducers({
//   contacts: phonebookReducers,
// });
// const store = createStore(rootReducer, devToolsEnhancer());
// export default store;

// *** after @reduxjs/toolkit

import { configureStore } from '@reduxjs/toolkit';
import phonebookReducers from './phonebookReducers';

const store = configureStore({
  reducer: {
    contacts: phonebookReducers,
  },
});

export default store;
