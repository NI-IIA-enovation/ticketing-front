import { Component, Input, OnInit } from '@angular/core';
import { NavigationMobileFooterComponent } from '../navigation/navigation-mobile-footer/navigation-mobile-footer.component';
import { NavigationMobileHeaderComponent } from '../navigation/navigation-mobile-header/navigation-mobile-header.component';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  navigationMobileHeaderComponent = NavigationMobileHeaderComponent;
  navigationMobileFooterComponent = NavigationMobileFooterComponent;
  @Input() menu:Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
