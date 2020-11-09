import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TableComponent],
  imports: [CdkTableModule, MatTableModule, MatPaginatorModule, MatSortModule, BrowserModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
