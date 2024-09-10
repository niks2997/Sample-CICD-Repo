// src/app/contact-list/contact-list.component.ts
import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { AuthService } from '../auth.service';
import { Router,  RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppState, Contact } from '../contact.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { removeContact } from '../action/contact.action';

@Component({
  selector: 'app-contact-list',
  templateUrl: '../contactlist/contactlist.component.html',
  imports :[FormsModule,  RouterModule ,CommonModule],
  standalone: true
})
export class ContactListComponent {
  contacts$: Observable<Contact[]>;

  constructor(private contactService: ContactService,private authService: AuthService,private router: Router, private route: ActivatedRoute,private store: Store<AppState>) {
    this.contacts$ = this.store.select('contacts');
  }

  deleteContact(id: number) {
    this.store.dispatch(removeContact({ contactId : id}));
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

