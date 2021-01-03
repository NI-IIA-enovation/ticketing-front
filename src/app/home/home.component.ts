import { Component, OnInit } from '@angular/core';
import { NavigationDesktopComponent } from '../navigation/navigation-desktop/navigation-desktop.component';
import { AccountService } from '../services/account.service';
import {dataconfig} from '../services/data/configmenu';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navigationDesktopComponent = NavigationDesktopComponent;

config = dataconfig;
listmenu = [];
  constructor(private servicemenu:MenuService,private serviceAccount:AccountService) {
    this.serviceAccount.setconfig();
    this.listmenu = this.servicemenu.getlistmenu();
   }

  ngOnInit(): void {
  }

}
