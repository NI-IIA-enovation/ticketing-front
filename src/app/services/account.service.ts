import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../sso.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<any>;
    public user: Observable<User>;

    constructor(
        private authService: OAuthService,
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(this.authService.getIdentityClaims());
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(): void {
        this.setconfig();
        this.authService.initImplicitFlow();
    }
    home(): void{
      if (this.token){
      this.userSubject.next(this.authService.getIdentityClaims());
      this.router.navigate(['/home/']);
    }
    }
    logout(): void {
        this.authService.logOut();
        this.userSubject.next(null);
        this.router.navigate(['/account/login/']);
    }
    setconfig(): void{
        this.authService.configure(authConfig);
        this.authService.tokenValidationHandler = new JwksValidationHandler();
        this.authService.loadDiscoveryDocumentAndTryLogin();
      }
      get token(): any{
        const claims: any = this.authService.getIdentityClaims();
        return claims ? claims : null;
      }
}