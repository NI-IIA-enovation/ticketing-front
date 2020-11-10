import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
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
import { TableModule } from 'table';
import { ControlsModule } from 'controls';
import { MatButtonModule } from '@angular/material/button';

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
    GoodComponent,
    GoodsComponent,
  ],
  imports: [
    TableModule,
    ControlsModule,
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
    ResponsiveModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ]
})
export class AppModule { }
