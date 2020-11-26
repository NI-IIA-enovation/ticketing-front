import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile-footer',
  templateUrl: './navigation-mobile-footer.component.html',
  styleUrls: ['./navigation-mobile-footer.component.scss']
})
export class NavigationMobileFooterComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
    constructor() {
  }
    ngOnInit(): void {
    }
}
