import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss']
})
export class NavigationMobileComponent implements OnInit {
  @Input() list: any;
  @Input() position: any;
    constructor() { }
  
    ngOnInit(): void {
  
    }
    getposition(position): string{
      switch (position) {
        case 'top':
          return 'top:0px;';
        case 'bottom':
          return 'bottom:0px';
      }
    }
}
