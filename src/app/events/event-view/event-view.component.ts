import { Component, OnInit } from '@angular/core';
import { eventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class eventViewComponent implements OnInit {

  constructor(public eventservice: eventService) { }

  ngOnInit(): void {
    // console.log(this.eventservice.form)
  }

}
