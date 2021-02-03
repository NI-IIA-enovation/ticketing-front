import { GoodEditComponent } from '../../goods/good-edit/good-edit.component';
import { AddNoteComponent } from '../../add-note/add-note.component';
import { GoodViewComponent } from '../../goods/good-view/good-view.component';
import { AppointmentComponent } from '../../appointment/appointment.component';
import { ActivityLogComponent } from '../../activity-log/activity-log.component';
import { AddGoodComponent } from '../../goods/add-good/add-good.component';
export class Itemcomonent {
  name: string;
  source: string;
  objet: string;
  component: any;
}
export const components: Itemcomonent[] = [
  {
    name: 'Edit',
    source: 'GoodComponent',
    objet: 'SNOffer',
    component: GoodEditComponent,
  },
  {
    name: 'View',
    source: 'GoodComponent',
    objet: 'SNOffer',
    component: GoodViewComponent,
  },
  {
    name: 'Insert',
    source: 'ContactComponenet',
    objet: 'Contact',
    component: AddNoteComponent,
  },
  {
    name: 'panel',
    source: 'GoodsComponent',
    objet: 'GoodsComponent',
    component: AppointmentComponent,
  },
  {
    name: 'panel',
    source: 'GoodsComponent',
    objet: 'GoodsComponent',
    component: ActivityLogComponent,
  },
  {
    name: 'Add',
    source: 'ActionGoodsComponent',
    objet: 'Good',
    component: AddGoodComponent,
  }
];
