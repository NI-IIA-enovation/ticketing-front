import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionContactsComponent } from './action-contacts/action-contacts.component';
import { ActionGoodsComponent } from './action-goods/action-goods.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GoodsComponent } from './goods/goods.component';

const routes: Routes = [

  { path: '', children: [
    { path: 'list-contact', component: ContactsComponent},
    {
    path: '',
    component: ActionContactsComponent,
    outlet: 'header'
  },
  {
    path: '',
    component: ContactsComponent,
    outlet: 'content'
  },
  ] },
  { path: '', children: [
    { path: 'list-good', component: GoodsComponent},
    {
    path: '',
    component: ActionGoodsComponent,
    outlet: 'header'
  },
  {
    path: '',
    component: GoodsComponent,
    outlet: 'content'
  }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
