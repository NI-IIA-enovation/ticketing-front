import { Component,ViewChild, Input, TemplateRef, AfterViewInit, Injector, ReflectiveInjector } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements  AfterViewInit {
  @Input() displayedColumns: any;
  @Input() data: any;
  @Input() row: any;
  @Input() interface: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  inject: any;
  CellTemplate?: TemplateRef <any>;
  constructor(private inj: Injector) {
    }

  ngAfterViewInit(): void {
  this.dataSource = this.data;
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  }
  getInjector(element: any): any {
    this.inject = ReflectiveInjector.resolveAndCreate( [{ provide: this.interface, useValue: element }], this.inj);
    return this.inject;
  }

}
