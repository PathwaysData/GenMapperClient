import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';


export const authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: environment.authConfig.authority,

    loginUrl: environment.authConfig.authority + environment.authConfig.loginEndpoint,
    userinfoEndpoint: environment.authConfig.authority + environment.authConfig.userEndpoint,

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/index.html',

    // The SPA's id. The SPA is registered with this id at the auth-server
    clientId: environment.authConfig.clientId,
    responseType: environment.authConfig.responseType,
    postLogoutRedirectUri: window.location.origin + '/index.html',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: environment.authConfig.scope,
    strictDiscoveryDocumentValidation: false,
    showDebugInformation: true,
}
