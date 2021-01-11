import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.scss']
})
export class NavigationUserComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() position: string;
  constructor(private serviceaccount:AccountService) { }

  ngOnInit(): void {
  }
  logout(menu : string) {
    if(menu == 'logout')
  this.serviceaccount.logout();
}
}
