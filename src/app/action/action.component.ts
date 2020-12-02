import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @Input() name: string;
  @Input() type: Component;
  constructor() { }

  ngOnInit(): void {
  }
  getlist(lst, ps): any{
    return  {list: lst,
            position : ps};
  }
}
