import { NgModule } from '@angular/core';
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
    MatSortModule
  ],
  exports: [SnitemComponent, ControlsComponent, TableComponent]
})
export class SnitemModule { }
