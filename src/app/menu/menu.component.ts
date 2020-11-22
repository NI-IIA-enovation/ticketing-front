import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() name: any;
  @Input() type: any;
  menu: any;
  constructor(private menuservice: MenuService )
  {
  }

  ngOnInit(): void {
    console.log(this.name);
    this.menu = this.menuservice.getmenu(this.name);
  }

  getlist(lst, ps): any{
    return  {list: lst,
            position : ps};
  }


}
