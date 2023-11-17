import { eventEditComponent } from '../../events/event-edit/event-edit.component';
import { AddNoteComponent } from '../../add-note/add-note.component';
import { eventViewComponent } from '../../events/event-view/event-view.component';
import { AppointmentComponent } from '../../appointment/appointment.component';
import { ActivityLogComponent } from '../../activity-log/activity-log.component';
import { AddeventComponent } from '../../events/add-event/add-event.component';
import { AddContactComponent } from '../../contacts/add-contact/add-contact.component';
export class Itemcomonent {
  name: string;
  source: string;
  objet: string;
  component: any;
}
export const components: Itemcomonent[] = [
  {
    name: 'Edit',
    source: 'eventComponent',
    objet: 'SNOffer',
    component: eventEditComponent,
  },
  {
    name: 'View',
    source: 'eventComponent',
    objet: 'SNOffer',
    component: eventViewComponent,
  },
  {
    name: 'Insert',
    source: 'ContactComponenet',
    objet: 'Contact',
    component: AddNoteComponent,
  },
  {
    name: 'panel',
    source: 'eventsComponent',
    objet: 'eventsComponent',
    component: AppointmentComponent,
  },
  {
    name: 'panel',
    source: 'eventsComponent',
    objet: 'eventsComponent',
    component: ActivityLogComponent,
  },
  {
    name: 'Add',
    source: 'ActioneventsComponent',
    objet: 'event',
    component: AddeventComponent,
  },
  {
    name: 'Add',
    source: 'NavigationMobileHeaderComponent',
    objet: 'event',
    component: AddeventComponent,
  },
  {
    name: 'Add-contact',
    source: 'NavigationMobileHeaderComponent',
    objet: 'event',
    component: AddContactComponent,
  },
  {
    name: 'Add',
    source: 'ActionContactsComponent',
    objet: 'event',
    component: AddContactComponent,
  }
];
