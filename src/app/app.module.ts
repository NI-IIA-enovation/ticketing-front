import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import {   MatStepperModule} from '@angular/material/stepper';
import {   MatCardModule} from '@angular/material/card';
import {   MatTabsModule} from '@angular/material/tabs';
import {   MatExpansionModule} from '@angular/material/expansion';
import {   MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlsComponent } from './controls/controls.component';
import { ListComponent } from './controls/list/list.component';
import { GoodComponent } from './controls/list/good/good.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatBadgeModule} from '@angular/material/badge';
import { ContactComponent } from './controls/list/contact/contact.component';
import { GoodsComponent } from './goods/goods.component';
import { IResponsiveConfig, ResponsiveModule } from 'ngx-responsive';

const config: IResponsiveConfig = {
  breakPoints: {
    xs: { max: 600 },
    sm: { min: 601, max: 859 },
    md: { min: 860, max: 1279 },
    lg: { min: 1280, max: 1919 },
    xl: { min: 1920 }
  },
  debounceTime: 100
};

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    ListComponent,
    GoodComponent,
    ContactComponent,
    GoodsComponent
    
  ],
  imports: [
    BrowserModule,
    MatBadgeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatRippleModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    FlexLayoutModule,
    ResponsiveModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ]
})
export class AppModule { }
