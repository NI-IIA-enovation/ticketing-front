import { Component, OnInit } from '@angular/core';
import { ActivityLogComponent } from '../activity-log/activity-log.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import {MatDialog} from '@angular/material/dialog';
import { SlidePanelService } from '../services/slide-panel.service';
import { AddNoteComponent } from '../add-note/add-note.component';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  appointment = AppointmentComponent;
  activitylog = ActivityLogComponent;
  listComponent: Array<Component>;
  constructor(public dialog: MatDialog,private slidepanelservice: SlidePanelService) { }

  ngOnInit(): void {
  }

  public showSlide(): void {
    this.slidepanelservice.setContent(AddNoteComponent);
    this.slidepanelservice.show();
  }
}
