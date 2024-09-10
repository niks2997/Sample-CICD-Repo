import { createReducer, on } from '@ngrx/store';
import { addContact, editContact, removeContact } from '../action/contact.action';
import { Contact } from '../contact.model';

export const initialState: Contact[] = [];

const _contactReducer = createReducer(
  initialState,
  on(addContact, (state, { contact }) => [...state, contact]),
  on(editContact, (state, { contact }) => {
    return state.map(existingContact =>
      existingContact.id === contact.id ? { ...existingContact, ...contact } : existingContact
    );
  }),
  on(removeContact, (state, { contactId }) =>
    state.filter(contact => contact.id !== contactId)
  )
);

export function contactReducer(state: any, action: any) {
  return _contactReducer(state, action);
}