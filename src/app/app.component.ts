import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faBuilding ,faCalendarAlt, faCog, faHome, faIdCard, faShoppingBasket, faEnvelope,faAngleDown, faUser, faPowerOff, faPencilAlt,faEye} from '@fortawesome/free-solid-svg-icons';
import {faGoogle,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { AccountService } from './services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
constructor(private registry: MatIconRegistry, private  sanitizer: DomSanitizer,private serviceAccount:AccountService ){
  if(this.serviceAccount.token){
    console.log('test');
  }
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
  registry.addSvgIconLiteral('fa-pencil', sanitizer.bypassSecurityTrustHtml(icon(faPencilAlt).html.join('')));
  registry.addSvgIconLiteral('fa-eye', sanitizer.bypassSecurityTrustHtml(icon(faEye).html.join('')));
  registry.addSvgIconLiteral('fa-facebook', sanitizer.bypassSecurityTrustHtml(icon(faFacebookF).html.join('')));
  registry.addSvgIconLiteral('fa-google', sanitizer.bypassSecurityTrustHtml(icon(faGoogle).html.join('')));
}




}
