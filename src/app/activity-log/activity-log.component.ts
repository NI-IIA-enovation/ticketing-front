import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() name: string;
  @Input() description: string;
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
