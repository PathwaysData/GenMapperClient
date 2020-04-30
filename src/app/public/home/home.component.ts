import { Component, OnInit } from '@angular/core';
import { OAuthService, UserInfo } from 'angular-oauth2-oidc';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public isLoggedIn = this.oauthService.hasValidAccessToken();
    public userInfo: UserInfo;

    constructor(private oauthService: OAuthService) { }

    public ngOnInit(): void {
        if (this.isLoggedIn) {
            this.loadUser();
        }
    }

    public login(): void {
        this.oauthService.initLoginFlow();
    }

    public logout(): void {
        this.oauthService.logOut();
    }

    public loadUser(): void {
        this.oauthService.loadUserProfile().then((u) => {
            this.userInfo = u;
        });
    }
}
