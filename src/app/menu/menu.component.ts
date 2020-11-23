import { Component, Input, OnInit } from '@angular/core';
import { Configmenu } from '../services/configmenu';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() name: string;
  @Input() type: Component;
  menu: Configmenu;
  constructor(private menuservice: MenuService )
  {
  }

  ngOnInit(): void {
    this.menu = this.menuservice.getmenu(this.name);
  }

  getlist(lst, ps): any{
    return  {list: lst,
            position : ps};
  }


}
