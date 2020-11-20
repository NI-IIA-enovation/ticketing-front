import { Component, Input, OnInit } from '@angular/core';
import { NavigationDesktopComponent } from '../navigation-desktop/navigation-desktop.component';
import { NavigationMobileComponent } from '../navigation-mobile/navigation-mobile.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menus: any;
  @Input() name: any;
  @Input() responsive: any;

  navigationMobileComponent = NavigationMobileComponent;
  navigationDesktopComponent = NavigationDesktopComponent;
  type: any;
  constructor() { }

  ngOnInit(): void {

  }
  getcomponent(type: string , responsive): any{
    switch (responsive) {
      case 'xs':
        return this.navigationMobileComponent;
      case 'xl':
        return this.navigationDesktopComponent;
    }
  }
  getlist(lst,ps): any{
    return  {list: lst,
            position : ps};
  }

}
