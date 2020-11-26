import { Component, OnInit } from '@angular/core';
import { NavigationLanguageComponent } from '../navigation-language/navigation-language.component';
import { NavigationUserComponent } from '../navigation-user/navigation-user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationUserComponent  = NavigationUserComponent;
  navigationlanguageComponent  = NavigationLanguageComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
