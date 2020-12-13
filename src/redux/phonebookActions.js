import * as ActionType from './actionTypes';

export const fetchContacts = contacts => ({
  type: ActionType.FETCH_CONTACTS,
  payload: contacts,
});

export const addContact = obj => ({
  type: ActionType.ADD_CONTACT,
  payload: obj,
});

export const deleteContact = id => ({
  type: ActionType.DELETE_CONTACT,
  payload: id,
});

export const inputFilter = value => ({
  type: ActionType.INPUT_FILTER,
  payload: value,
});

export const filterContacts = filter => ({
  type: ActionType.FILTER_CONTACTS,
  payload: filter,
});
