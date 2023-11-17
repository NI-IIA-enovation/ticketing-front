import { Component, OnInit } from '@angular/core';
import { eventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class eventEditComponent implements OnInit {

  constructor(public eventservice: eventService) {

  }
  ngOnInit(): void {

  }

}
