import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faHome, faBuilding , faIdCard, faCalendarAlt, faShoppingBasket, faCog} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-desktop',
  templateUrl: './navigation-desktop.component.html',
  styleUrls: ['./navigation-desktop.component.scss']
})
export class NavigationDesktopComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
  constructor(private registry: MatIconRegistry, private  sanitizer: DomSanitizer) {

    registry.addSvgIconLiteral('fa-home', sanitizer.bypassSecurityTrustHtml(icon(faHome).html.join('')));
    registry.addSvgIconLiteral('fa-building', sanitizer.bypassSecurityTrustHtml(icon(faBuilding).html.join('')));
    registry.addSvgIconLiteral('fa-card', sanitizer.bypassSecurityTrustHtml(icon(faIdCard).html.join('')));
    registry.addSvgIconLiteral('fa-calendar', sanitizer.bypassSecurityTrustHtml(icon(faCalendarAlt).html.join('')));
    registry.addSvgIconLiteral('fa-shoppingbasket', sanitizer.bypassSecurityTrustHtml(icon(faShoppingBasket).html.join('')));
    registry.addSvgIconLiteral('fa-cog', sanitizer.bypassSecurityTrustHtml(icon(faCog).html.join('')));
   }

  ngOnInit(): void {
  }

}
