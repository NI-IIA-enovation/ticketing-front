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
import { MatTableResponsiveModule } from './controls/list/mat-table-responsive/mat-table-responsive.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    ListComponent,
    GoodComponent,

  ],
  imports: [
    BrowserModule,
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
    MatTableResponsiveModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
