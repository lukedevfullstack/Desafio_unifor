import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { keycloakConfig } from './keycloak.config';

@Injectable({ providedIn: 'root' })
export class KeycloakService {
    private keycloak!: Keycloak;

    init(): Promise<boolean> {
        this.keycloak = new Keycloak(keycloakConfig);

        return this.keycloak
            .init({ onLoad: 'login-required', checkLoginIframe: false })
            .then(authenticated => authenticated)
            .catch(() => false);
    }

    logout(): void {
        this.keycloak.logout();
    }

    getToken(): string | undefined {
        return this.keycloak.token;
    }

    getUsername(): string | undefined {
        return this.keycloak.tokenParsed?.preferred_username;
    }

    isUserInRole(role: string): boolean {
        return this.keycloak.hasRealmRole(role);
    }
}
