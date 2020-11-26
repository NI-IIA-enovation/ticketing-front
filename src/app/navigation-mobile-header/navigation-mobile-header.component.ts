import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile-header.component.html',
  styleUrls: ['./navigation-mobile-header.component.scss']
})
export class NavigationMobileHeaderComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
    constructor() {
  }
    ngOnInit(): void {
    }
}
