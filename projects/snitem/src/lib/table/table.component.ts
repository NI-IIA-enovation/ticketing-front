
import { Component, ViewChild, Input, TemplateRef, AfterViewInit, OnInit, NgModuleFactory } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'lib-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() displayedColumns: Array<any>;
  @Input() data: MatTableDataSource<[any]>;
  @Input() row: Array<[any]>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<[any]>;
  CellTemplate?: TemplateRef<any>;
  MyModule: NgModuleFactory<any>;
  constructor() {

  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.dataSource = this.data;
    console.log(this.data)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getElement(elm, clm): any {
    return {
      element: elm,
      column: clm
    }
  }
}
