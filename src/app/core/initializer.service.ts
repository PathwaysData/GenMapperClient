import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { authConfig } from './auth.config';

@Injectable()
export class InitializerService {
    constructor(
        private authService: OAuthService
    ) { }

    public load(): Promise<void> {
        this.authService.configure(authConfig);

        let discoverDoc = authConfig.issuer;
        if (!discoverDoc.endsWith('/')) {
            discoverDoc += '/';
        }

        discoverDoc += '.well-known/openid-configuration';

        return this.authService.loadDiscoveryDocument(discoverDoc).then(() => this.authService.tryLoginCodeFlow());
    }
}
