import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { contactReducer } from './reducer/contact.reducer';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot({ contacts: contactReducer })],
  bootstrap: []
})
export class AppModule {}