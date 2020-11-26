import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.scss']
})
export class NavigationUserComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
  constructor() { }

  ngOnInit(): void {
  }

}
