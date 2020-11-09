import { Component, OnInit } from '@angular/core';
import {data, PeriodicElement} from './../services/data';
import {GoodComponent} from '../controls/list/good/good.component';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  datagood = data;
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
