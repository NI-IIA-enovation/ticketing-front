import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
const config: IResponsiveConfig = {
  breakPoints: {
    xs: { max: 1000 },
    sm: { min: 601, max: 859 },
    md: { min: 860, max: 1200 },
    lg: { min: 1201, max: 1919 },
    xl: { min: 1000 }
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
    MatGridListModule,ScrollingModule,
    ResponsiveModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
