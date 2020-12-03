import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { GoodService } from 'src/app/services/good.service';

import { SlidePanelService } from 'src/app/services/slide-panel.service';
import { GoodEditComponent } from '../good-edit/good-edit.component';
@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {
  @Input() element: string;
  @Input() column: string;
  constructor(private service: GoodService,private slidepanelservice: SlidePanelService , private router : Router ) {
  }

  ngOnInit(): void {
  }
  public EditShow(element): void {
    this.service.setform(element);
    this.slidepanelservice.setContent(GoodEditComponent);
    this.slidepanelservice.show();
  }
}
