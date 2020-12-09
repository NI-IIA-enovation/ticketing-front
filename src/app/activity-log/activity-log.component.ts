import { Component, OnInit } from '@angular/core';
import { List} from '../services/data/sidepanel';
import { ListItemService } from '../services/list-item.service';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent implements OnInit {
  list: Array<List>;

  constructor(private servicepanel: ListItemService) { }

  ngOnInit(): void {
    this.list = this.servicepanel.getpanel(this);
  }

}
