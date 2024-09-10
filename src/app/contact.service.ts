
import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private nextId = 1;

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact) {
    contact.id = this.nextId++;
    this.contacts.push(contact);
  }

  editContact(contact: Contact) {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      this.contacts[index] = contact;
    }
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
}
