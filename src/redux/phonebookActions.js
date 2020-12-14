// *** before redux @reduxjs/toolkit

// import * as ActionType from './actionTypes';
// export const fetchContacts = contacts => ({ type: ActionType.FETCH_CONTACTS, payload: contacts });
// export const addContact = obj => ({ type: ActionType.ADD_CONTACT, payload: obj });
// export const deleteContact = id => ({ type: ActionType.DELETE_CONTACT, payload: id });
// export const inputFilter = value => ({ type: ActionType.INPUT_FILTER, payload: value });
// export const filterContacts = filter => ({ type: ActionType.FILTER_CONTACTS, payload: filter });

// *** after @reduxjs/toolkit

import { createAction } from '@reduxjs/toolkit';
import * as ActionType from './actionTypes';

export const fetchContacts = createAction(ActionType.FETCH_CONTACTS);
export const addContact = createAction(ActionType.ADD_CONTACT);
export const deleteContact = createAction(ActionType.DELETE_CONTACT);
export const inputFilter = createAction(ActionType.INPUT_FILTER);
export const filterContacts = createAction(ActionType.FILTER_CONTACTS);
