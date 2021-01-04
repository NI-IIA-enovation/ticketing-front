import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewChecked {
  
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private router: Router,
      private accountService: AccountService,
  ) { this.accountService.setconfig() }

 
  ngAfterViewChecked(){
      this.accountService.home();
    
  }


  signInWithGoogle() {
      this.loading = true;
      this.accountService.login();
         
  }

}
