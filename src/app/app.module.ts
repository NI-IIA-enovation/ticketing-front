import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import {   MatStepperModule} from '@angular/material/stepper';
import {   MatTabsModule} from '@angular/material/tabs';
import {   MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoodComponent } from './goods/good/good.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatBadgeModule} from '@angular/material/badge';
import { GoodsComponent } from './goods/goods.component';
import { IResponsiveConfig, ResponsiveModule } from 'ngx-responsive';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SnitemModule } from 'projects/snitem/src/lib/snitem.module';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { DynamicAttributesModule, DynamicModule } from 'ng-dynamic-component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NavigationDesktopComponent } from './navigation/navigation-desktop/navigation-desktop.component';
import { NavigationMobileHeaderComponent } from './navigation/navigation-mobile-header/navigation-mobile-header.component';
import { NavigationMobileFooterComponent } from './navigation/navigation-mobile-footer/navigation-mobile-footer.component';
import { WorkComponent } from './work/work.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { NavigationUserComponent } from './navigation/navigation-user/navigation-user.component';
import { NavigationLanguageComponent } from './navigation/navigation-language/navigation-language.component';
import { HeaderComponent } from './header/header.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddNoteComponent } from './add-note/add-note.component';
import { ActionComponent } from './action/action.component';
import { ActionUserComponent } from './action-user/action-user.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ActionContactsComponent } from './action-contacts/action-contacts.component';
import { ActionGoodsComponent } from './action-goods/action-goods.component';
import { GoodEditComponent } from './goods/good-edit/good-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoodViewComponent } from './goods/good-view/good-view.component';
import { ComponentsService } from './services/components.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { GoodControlComponent } from './goods/good-control/good-control.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { OAuthModule } from 'angular-oauth2-oidc';

const config: IResponsiveConfig = {
  breakPoints: {
    xs: {max: 600},
    sm: {min: 601, max: 959},
    md: {min: 960, max: 1279},
    lg: {min: 1280, max: 1919},
    xl: {min: 1920}
},
  debounceTime: 100
};

@NgModule({
  declarations: [
    AppComponent,
    GoodComponent,
    GoodsComponent,
    NavigationDesktopComponent,
    NavigationMobileHeaderComponent,
    NavigationMobileFooterComponent,
    WorkComponent,
    AppointmentComponent,
    ActivityLogComponent,
    NavigationUserComponent,
    NavigationLanguageComponent,
    HeaderComponent,
    AddNoteComponent,
    ActionComponent,
    ActionUserComponent,
    ContactListComponent,
    ContactsComponent,
    ActionContactsComponent,
    ActionGoodsComponent,
    GoodEditComponent,
    GoodViewComponent,
    GoodControlComponent,
    HomeComponent,
    MobileComponent,
   
    
    
    
  ],
  imports: [
    DynamicAttributesModule,
    FormsModule,
    DynamicModule,
    SnitemModule,
    BrowserModule,
    MatBadgeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatToolbarModule,
    MatStepperModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    ScrollingModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    ResponsiveModule.forRoot(config),
    HttpClientModule,
    TranslocoRootModule,
    BrowserModule,
    OAuthModule.forRoot()
  ],
  providers: [ComponentsService],
  bootstrap: [AppComponent],
  entryComponents: [ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
