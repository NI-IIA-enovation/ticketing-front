import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import {   MatStepperModule} from '@angular/material/stepper';
import {   MatCardModule} from '@angular/material/card';
import {   MatTabsModule} from '@angular/material/tabs';
import {   MatExpansionModule} from '@angular/material/expansion';
import {   MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlsComponent } from './controls/controls.component';
import { GoodComponent } from './goods/good/good.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatBadgeModule} from '@angular/material/badge';
import { GoodsComponent } from './goods/goods.component';
import { IResponsiveConfig, ResponsiveModule } from 'ngx-responsive';
import { TableModule } from 'table';
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
    GoodComponent,
    GoodsComponent,
  ],
  imports: [
    TableModule,
    BrowserModule,
    MatBadgeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatInputModule,
    FlexLayoutModule,
    ResponsiveModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ]
})
export class AppModule { }
