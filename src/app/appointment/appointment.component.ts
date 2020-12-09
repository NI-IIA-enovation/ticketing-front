import { Component, Input, OnInit } from '@angular/core';
import { List } from '../services/data/sidepanel';
import { ListItemService } from '../services/list-item.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  list: Array<List>;
  constructor(private servicepanel: ListItemService ) { }

  ngOnInit(): void {
  this.list = this.servicepanel.getpanel(this);
  }
  getcolor(color): string{
    return 'border-color:' + color;
  }
}
