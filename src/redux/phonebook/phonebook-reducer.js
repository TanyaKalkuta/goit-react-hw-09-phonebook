import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import contacts from '../../json/contacts.json';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './phonebook-action';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  // [addContactSuccess]: (state, { payload }) => [...state, payload],
  [addContactSuccess]: (state, { payload }) => {
    if (state.map(contact => contact.name).includes(payload.name)) {
      return alert(`${payload.name} is already exist`);
    }
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
