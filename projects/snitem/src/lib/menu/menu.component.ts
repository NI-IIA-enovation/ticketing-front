import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() name: string;
  @Input() type: Component;
  @Input() list: Array<any>;
  menu: any;
  constructor() {
  }

  ngOnInit(): void {
    this.menu = this.list.find(item => item.name === this.name);
  }

  getlist(lst, ps): any {

    return {
      list: lst,
      position: ps
    };
  }

}
