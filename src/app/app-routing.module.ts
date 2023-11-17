import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionContactsComponent } from './action-contacts/action-contacts.component';
import { ActioneventsComponent } from './action-events/action-events.component';
import { ContactsComponent } from './contacts/contacts.component';
import { eventEditComponent } from './events/event-edit/event-edit.component';
import { eventsComponent } from './events/events.component';
import { AuthGuard } from './helpers';
import { HomeComponent } from './home/home.component';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'list-event', pathMatch: 'full' },
    { path: 'list-event', component: eventsComponent},
    { path: 'list-contact', component: ContactsComponent},
    {
      path: 'list-event',
      outlet: 'header',
      component: ActioneventsComponent,
    }, {
      path: 'list-contact',
      component: ActionContactsComponent,
      outlet: 'header'
    }
  ]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
