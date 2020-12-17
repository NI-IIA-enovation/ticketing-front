import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionContactsComponent } from './action-contacts/action-contacts.component';
import { ActionGoodsComponent } from './action-goods/action-goods.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GoodEditComponent } from './goods/good-edit/good-edit.component';
import { GoodsComponent } from './goods/goods.component';
import { AuthGuard } from './helpers';
import { HomeComponent } from './home/home.component';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  { path: 'account', loadChildren: accountModule },

  { path: 'home',component:HomeComponent, children: [
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
  ] , canActivate: [AuthGuard]},
  { path: 'home',component:HomeComponent, children: [
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
  },
  {
    path: 'list-good/:id',
    component: GoodEditComponent,
  }
  ], canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
