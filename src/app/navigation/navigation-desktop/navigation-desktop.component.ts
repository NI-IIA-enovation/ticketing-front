import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-desktop',
  templateUrl: './navigation-desktop.component.html',
  styleUrls: ['./navigation-desktop.component.scss']
})
export class NavigationDesktopComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
  constructor(private _router:Router) {
}

  ngOnInit(): void {
  }
  Navigate(parm) {
    
    this._router.navigate(['/home/'+parm]);
    
   }
}
