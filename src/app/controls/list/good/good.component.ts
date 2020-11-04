import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PeriodicElement, data } from '../../../services/data';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {
  @ViewChild('templateList') templateList: TemplateRef<any>;
  @ViewChild('templateCtr') templateCtr: TemplateRef<any>;
  displayedColumns: string[] = ['name', 'user', 'weight', 'Actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(data);


  constructor() { }

  ngOnInit(): void {
  }

}
