import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() name: string;
  @Input() description: string;
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }
  getcolor(color): string{
    return 'border-color:' + color;
  }
}
