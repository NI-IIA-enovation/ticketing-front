import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faCalendarAlt, faCog, faHome, faIdCard, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile-header.component.html',
  styleUrls: ['./navigation-mobile-header.component.scss']
})
export class NavigationMobileHeaderComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
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
