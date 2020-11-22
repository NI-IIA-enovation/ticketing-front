import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faCalendarAlt, faCog, faHome, faIdCard, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-mobile-footer',
  templateUrl: './navigation-mobile-footer.component.html',
  styleUrls: ['./navigation-mobile-footer.component.scss']
})
export class NavigationMobileFooterComponent implements OnInit {
  @Input() list: any;
  @Input() position: any;
    constructor(private registry: MatIconRegistry,private  sanitizer: DomSanitizer) {
    registry.addSvgIconLiteral('fa-home', sanitizer.bypassSecurityTrustHtml(icon(faHome).html.join('')));
    registry.addSvgIconLiteral('fa-building', sanitizer.bypassSecurityTrustHtml(icon(faBuilding).html.join('')));
    registry.addSvgIconLiteral('fa-card', sanitizer.bypassSecurityTrustHtml(icon(faIdCard).html.join('')));
    registry.addSvgIconLiteral('fa-calendar', sanitizer.bypassSecurityTrustHtml(icon(faCalendarAlt).html.join('')));
    registry.addSvgIconLiteral('fa-shoppingbasket', sanitizer.bypassSecurityTrustHtml(icon(faShoppingBasket).html.join('')));
    registry.addSvgIconLiteral('fa-cog', sanitizer.bypassSecurityTrustHtml(icon(faCog).html.join('')));}
    ngOnInit(): void {
    }
  
}
