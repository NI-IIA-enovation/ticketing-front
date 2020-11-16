import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SnitemComponent } from './snitem.component';
import { ControlsComponent } from './controls/controls.component';
import { TableComponent } from './table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { IResponsiveConfig, ResponsiveModule } from 'ngx-responsive';
import { DynamicAttributesModule, DynamicModule } from 'ng-dynamic-component';


const config: IResponsiveConfig = {
  breakPoints: {
    xs: { max: 50 },
    sm: { min: 50, max: 859 },
    md: { min: 860, max: 1279 },
    lg: { min: 1280, max: 1919 },
    xl: { min: 1920 }
  },
  debounceTime: 100
};

@NgModule({
  declarations: [SnitemComponent, ControlsComponent, TableComponent],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DynamicModule,
    ResponsiveModule.forRoot(config),
    DynamicAttributesModule,
  ],
  exports: [SnitemComponent, ControlsComponent, TableComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SnitemModule { }
