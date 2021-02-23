import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile-header.component.html',
  styleUrls: ['./navigation-mobile-header.component.scss']
})
export class NavigationMobileHeaderComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
  menu;
  currentComp;
  constructor(private _router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    console.log(this.list)
    const compName = this.route.snapshot.routeConfig.component.name;
    console.log(compName)
    console.log(this.route)
    this.currentComp = this._router.url.substr(6)
    // console.log(this._router.url.substr(6))
    // console.log(this.route.component)
    var snapshot = this.route.snapshot;
    console.log(snapshot.routeConfig.component.name);
  }
  Navigate(parm, name) {
    console.log(parm)
    this.currentComp = parm
    this._router.navigate(['/home/' + parm]);
  }
}
