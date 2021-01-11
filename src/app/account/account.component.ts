import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private accountservice:AccountService,private router: Router) {}

  ngOnInit(): void {
    this.accountservice.setconfig();
   
   
  }
  signInWithGoogle(): void {
   
   
   
  }
}
