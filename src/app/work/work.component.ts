import { Component, OnInit } from '@angular/core';
import { ActivityLogComponent } from '../activity-log/activity-log.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  appointment = AppointmentComponent;
  activitylog = ActivityLogComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
