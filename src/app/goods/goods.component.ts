import { Component, OnInit } from '@angular/core';
import {data, PeriodicElement} from './../services/data';
import {GoodComponent} from './good/good.component';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentComponent } from '../appointment/appointment.component';
import { ActivityLogComponent } from '../activity-log/activity-log.component';
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  datagood = data;
  PeriodicElement = PeriodicElement;
  GoodComponent = GoodComponent;
  appointment = AppointmentComponent;
  activitylog = ActivityLogComponent;
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
