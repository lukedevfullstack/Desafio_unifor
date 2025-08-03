import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { KeycloakService } from './auth/keycloak.service';

export function initializeKeycloak(keycloak: KeycloakService) {
    return () => keycloak.init();
}

@NgModule({
    declarations: [AppComponent, ForbiddenComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeKeycloak,
            multi: true,
            deps: [KeycloakService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }