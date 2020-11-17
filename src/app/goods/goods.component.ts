import { Component, OnInit } from '@angular/core';
import {data, PeriodicElement,styleResponsive,styleTable,ResponsiveControls,styleControls} from './../services/data';
import {GoodComponent} from './good/good.component';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  datagood = data;
  Responsive = styleResponsive;
  TableStyle = styleTable;
  ResponsiveControls = ResponsiveControls;
  styleControls = styleControls;
  PeriodicElement = PeriodicElement;
  GoodComponent = GoodComponent;
  displayedColumns: string[] = ['name',  'user', 'visite', 'notif', 'deadline', 'priority', 'status', 'actions'];
  dataSource = new MatTableDataSource();
  constructor() {
   }

  ngOnInit(): void {
    this.dataSource.data = this.datagood;
  }
  datagoods(event): void{
   this.datagood = event;
  }
}
