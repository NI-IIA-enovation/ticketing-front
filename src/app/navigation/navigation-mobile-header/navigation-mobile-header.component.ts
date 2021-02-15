import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile-header.component.html',
  styleUrls: ['./navigation-mobile-header.component.scss']
})
export class NavigationMobileHeaderComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
  constructor(private _router: Router) {
  }
  ngOnInit(): void {
    console.log(this.list)
  }
  Navigate(parm) {
    console.log(parm)
    this._router.navigate(['/home/' + parm]);

  }
}
