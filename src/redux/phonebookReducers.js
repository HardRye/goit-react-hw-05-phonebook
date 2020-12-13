import { combineReducers } from 'redux';
import * as ActionType from './actionTypes';

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_CONTACTS:
      return payload;

    case ActionType.ADD_CONTACT:
      return [payload, ...state];

    case ActionType.DELETE_CONTACT:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.INPUT_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
