import { DOCUMENT } from '@angular/common';
import { Component, ViewChild, Input, TemplateRef,AfterViewInit,OnInit, NgModuleFactory, Compiler, Renderer2, ElementRef, Inject } from '@angular/core';
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
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: any) {

    }
    ngOnInit(): void{
      // Dynamically create the CSS tags
     
      const styles = this.document.createElement('STYLE') as HTMLStyleElement;
      styles.className = 'test';
      styles.innerHTML = this.styleclass;
      this.renderer.appendChild(this.document.head, styles);
      this.styleclass = '';
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
