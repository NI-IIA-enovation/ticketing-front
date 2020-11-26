import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faCalendarAlt, faCog, faHome, faIdCard, faShoppingBasket, faEnvelope, faAngleDown, faUser,faPowerOff } from '@fortawesome/free-solid-svg-icons';
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
constructor(private registry: MatIconRegistry, private  sanitizer: DomSanitizer){
  registry.addSvgIconLiteral('fa-home', sanitizer.bypassSecurityTrustHtml(icon(faHome).html.join('')));
  registry.addSvgIconLiteral('fa-building', sanitizer.bypassSecurityTrustHtml(icon(faBuilding).html.join('')));
  registry.addSvgIconLiteral('fa-card', sanitizer.bypassSecurityTrustHtml(icon(faIdCard).html.join('')));
  registry.addSvgIconLiteral('fa-calendar', sanitizer.bypassSecurityTrustHtml(icon(faCalendarAlt).html.join('')));
  registry.addSvgIconLiteral('fa-shoppingbasket', sanitizer.bypassSecurityTrustHtml(icon(faShoppingBasket).html.join('')));
  registry.addSvgIconLiteral('fa-cog', sanitizer.bypassSecurityTrustHtml(icon(faCog).html.join('')));
  registry.addSvgIconLiteral('fa-envelope', sanitizer.bypassSecurityTrustHtml(icon(faEnvelope).html.join('')));
  registry.addSvgIconLiteral('fa-angledown', sanitizer.bypassSecurityTrustHtml(icon(faAngleDown).html.join('')));
  registry.addSvgIconLiteral('fa-user', sanitizer.bypassSecurityTrustHtml(icon(faUser).html.join('')));
  registry.addSvgIconLiteral('fa-off', sanitizer.bypassSecurityTrustHtml(icon(faPowerOff).html.join('')));
  
}
}
