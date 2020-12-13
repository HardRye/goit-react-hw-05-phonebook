import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contactsArr, filterValue) => {
    return !filterValue
      ? contactsArr
      : contactsArr.filter(contact =>
          contact.name.toLowerCase().includes(filterValue.trim().toLowerCase()),
        );
  },
);
