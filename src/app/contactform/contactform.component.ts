// src/app/contact-form/contact-form.component.ts
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService} from '../contact.service';
import { FormsModule } from '@angular/forms';
import { AppState, Contact } from '../contact.model';
import { Store } from '@ngrx/store';
import { addContact, editContact } from '../action/contact.action';

@Component({
  selector: 'app-contact-form',
  templateUrl: '../contactform/contactform.component.html',
  imports :[ FormsModule],
  standalone: true
})
export class ContactFormComponent {
  contact: Contact = { id: 0, name: '', phone: '' };
  editMode = false;

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute,private store: Store<AppState>) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.contact = { ...this.contactService.getContacts().find(c => c.id === +id)! };
    }
  }

  saveContact(contact:Contact) {
    if (this.editMode) {
      const updatedContact: Contact = {
        ...contact
      };
      this.store.dispatch(editContact({ contact: updatedContact }));
    } else {
      this.store.dispatch(addContact({ contact: contact }));
    }
    this.router.navigate(['/contacts']);
  }
}
