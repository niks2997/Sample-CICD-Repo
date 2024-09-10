// src/app/state/contact.actions.ts
import { createAction, props } from '@ngrx/store';
import { Contact } from '../contact.model';

export const addContact = createAction(
  '[Contact List] Add Contact',
  props<{ contact: Contact }>()
);

export const editContact = createAction(
    '[Contact List] Edit Contact',
    props<{ contact: Contact }>() // The action payload includes the updated contact
);

export const removeContact = createAction(
  '[Contact List] Remove Contact',
  props<{ contactId: number }>()
);


export const loadContacts = createAction('[Contact List] Load Contacts');