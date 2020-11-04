import { Component, OnInit , ViewChild, Input, TemplateRef, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements  AfterViewInit {
  @Input() displayedColumns: any;
  @Input() data: MatTableDataSource<any>;
  @Input() templateList: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  CellTemplate?: TemplateRef <any>;
  constructor() { }

  ngAfterViewInit(): void {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }
}
