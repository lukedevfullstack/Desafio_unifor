import { KeycloakOptions } from 'keycloak-angular';

export const keycloakConfig: KeycloakOptions = {
    config: {
        url: 'http://localhost:8080/auth',
        realm: 'unifor-realm',
        clientId: 'unifor-frontend'
    },
    initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
    }
};
