import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {
  @Input() column: any;
  @Input() element: any;
  constructor() { }

  ngOnInit(): void {
  }

}
