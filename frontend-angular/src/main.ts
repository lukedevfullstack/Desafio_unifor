import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { keycloakConfig } from './app/core/keycloak.config';

bootstrapApplication(AppComponent, {
    providers: [
        KeycloakService,
        KeycloakAngularModule,
        {
            provide: APP_INITIALIZER,
            useFactory: (keycloak: KeycloakService) => () => keycloak.init(keycloakConfig),
            deps: [KeycloakService],
            multi: true
        }
    ]
});
