import { Component, OnInit } from '@angular/core';
import { NavigationLanguageComponent } from '../navigation/navigation-language/navigation-language.component';
import { NavigationUserComponent } from '../navigation/navigation-user/navigation-user.component';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationUserComponent  = NavigationUserComponent;
  navigationlanguageComponent  = NavigationLanguageComponent;
  listmenu = [];
  constructor(private servicemenu:MenuService) { }
  
  ngOnInit(): void {
    this.listmenu = this.servicemenu.getlistmenu();
  }

}
