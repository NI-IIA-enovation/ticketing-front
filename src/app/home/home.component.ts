import { Component, OnInit } from '@angular/core';
import { NavigationDesktopComponent } from '../navigation/navigation-desktop/navigation-desktop.component';
import { NavigationMobileFooterComponent } from '../navigation/navigation-mobile-footer/navigation-mobile-footer.component';
import { NavigationMobileHeaderComponent } from '../navigation/navigation-mobile-header/navigation-mobile-header.component';
import {dataconfig} from '../services/data/configmenu';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navigationMobileHeaderComponent = NavigationMobileHeaderComponent;
  navigationMobileFooterComponent = NavigationMobileFooterComponent;
  navigationDesktopComponent = NavigationDesktopComponent;

config = dataconfig;
listmenu = [];
  constructor(private servicemenu:MenuService) {
    this.listmenu = this.servicemenu.getlistmenu();
   }

  ngOnInit(): void {
  }

}
