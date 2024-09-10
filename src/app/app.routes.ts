import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactFormComponent } from '../app/contactform/contactform.component';
import { AuthGuard } from './auth.guard';
import { ContactListComponent } from './contactlist/contactlist.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: ContactFormComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: ContactFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
