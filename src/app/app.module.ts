import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitializerService } from './core/initializer.service';
import { PublicModule } from './public/public.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PublicModule,
        HttpClientModule,
        OAuthModule.forRoot()
    ],
    providers: [
        InitializerService,
        {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [InitializerService, OAuthService],
            useFactory: (provider: InitializerService) => () => provider.load()
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
