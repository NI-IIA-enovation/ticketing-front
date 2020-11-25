import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation-desktop',
  templateUrl: './navigation-desktop.component.html',
  styleUrls: ['./navigation-desktop.component.scss']
})
export class NavigationDesktopComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
  constructor() {
}

  ngOnInit(): void {
  }

}
