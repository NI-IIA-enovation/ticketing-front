import { Component } from '@angular/core';
import { NavigationDesktopComponent } from './navigation-desktop/navigation-desktop.component';
import { NavigationMobileFooterComponent } from './navigation-mobile-footer/navigation-mobile-footer.component';
import { NavigationMobileHeaderComponent } from './navigation-mobile-header/navigation-mobile-header.component';
import {dataconfig} from './services/configmenu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigationMobileHeaderComponent = NavigationMobileHeaderComponent;
  navigationMobileFooterComponent = NavigationMobileFooterComponent;
  navigationDesktopComponent = NavigationDesktopComponent;
config = dataconfig;
constructor(){
}
}
