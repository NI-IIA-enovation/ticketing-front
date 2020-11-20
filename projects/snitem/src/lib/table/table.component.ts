
import { Component, ViewChild, Input, TemplateRef,AfterViewInit,OnInit, NgModuleFactory } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'lib-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit ,  AfterViewInit {
  @Input() displayedColumns: any;
  @Input() data: any;
  @Input() row: any;
  @Input() interface: any;
  @Input() styleclass: any;
  inputs = {
    title: 'ui'
  };
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  inject: any;
  CellTemplate?: TemplateRef <any>;
  MyModule: NgModuleFactory<any>;
  constructor() {

    }
    ngOnInit(): void{
   
    }
  ngAfterViewInit(): void {
  this.dataSource = this.data;
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  }
  getElement(elm, clm): any {

 return { element: elm,
          column : clm }
  }

}
