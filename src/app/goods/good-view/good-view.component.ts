import { Component, OnInit } from '@angular/core';
import { GoodService } from 'src/app/services/good.service';

@Component({
  selector: 'app-good-view',
  templateUrl: './good-view.component.html',
  styleUrls: ['./good-view.component.scss']
})
export class GoodViewComponent implements OnInit {

  constructor(public goodservice: GoodService) { }

  ngOnInit(): void {
  }

}
