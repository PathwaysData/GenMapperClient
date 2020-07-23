// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthConfig } from 'angular-oauth2-oidc';

export const environment = {
    production: false,
    services: {
        // toolsApi: "https://localhost:5001",
        toolsApi: 'https://commander-example-web-app.azurewebsites.net',
    },
    authConfig: {
        // authority: 'http://localhost:5000',
        authority: 'https://taethni-idp.azurewebsites.net',
        clientId: 'angular_spa_local'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
