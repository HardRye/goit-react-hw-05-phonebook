import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as ActionType from './actionTypes';

// *** before redux @reduxjs/toolkit

// const contactsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ActionType.FETCH_CONTACTS:
//       return payload;

//     case ActionType.ADD_CONTACT:
//       return [payload, ...state];

//     case ActionType.DELETE_CONTACT:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// };

// *** after redux @reduxjs/toolkit

const initialContactsState = [];
const contactsReducer = createReducer(initialContactsState, builder => {
  builder
    .addCase(ActionType.FETCH_CONTACTS, (state, action) => action.payload)
    // .addCase(ActionType.ADD_CONTACT, (state, action) => [
    //   action.payload,
    //   ...state,
    // ])
    // createReducer uses immer to let you write reducers as if they were mutating the state directly.
    // In reality, the reducer receives a proxy state that translates all mutations into equivalent copy operations
    // This is why we can use methods like push or unshift with no fear of mutating state
    .addCase(ActionType.ADD_CONTACT, (state, action) => {
      state.unshift(action.payload);
    })
    .addCase(ActionType.DELETE_CONTACT, (state, action) =>
      state.filter(item => item.id !== action.payload),
    )
    .addDefaultCase(state => state);
});

// *** before redux @reduxjs/toolkit

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case ActionType.INPUT_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// *** after redux @reduxjs/toolkit

const initialFilterState = '';
const filterReducer = createReducer(initialFilterState, {
  [ActionType.INPUT_FILTER]: (state, action) => action.payload,
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
