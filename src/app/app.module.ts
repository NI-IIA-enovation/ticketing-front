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
import { MenuComponent } from './menu/menu.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { DynamicAttributesModule, DynamicModule } from 'ng-dynamic-component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NavigationDesktopComponent } from './navigation-desktop/navigation-desktop.component';
import { NavigationMobileHeaderComponent } from './navigation-mobile-header/navigation-mobile-header.component';
import { NavigationMobileFooterComponent } from './navigation-mobile-footer/navigation-mobile-footer.component';
import { SidePanelComponent } from './work/side-panel/side-panel.component';
import { WorkComponent } from './work/work.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { NavigationUserComponent } from './navigation-user/navigation-user.component';
import { NavigationLanguageComponent } from './navigation-language/navigation-language.component';
import { HeaderComponent } from './header/header.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SlidePanelComponent } from './slide-panel/slide-panel.component';
import { AddNoteComponent } from './add-note/add-note.component';
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
    MenuComponent,
    NavigationDesktopComponent,
    NavigationMobileHeaderComponent,
    NavigationMobileFooterComponent,
    SidePanelComponent,
    WorkComponent,
    AppointmentComponent,
    ActivityLogComponent,
    NavigationUserComponent,
    NavigationLanguageComponent,
    HeaderComponent,
    SlidePanelComponent,
    AddNoteComponent
  ],
  imports: [
    DynamicAttributesModule,
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
    ResponsiveModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
