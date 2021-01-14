import { KeycloakConfig } from 'keycloak-js';

let keycloakConfig: KeycloakConfig = {
  url: 'http://host.docker.internal:8080/auth/',
  realm: 'master',
  clientId: 'demo'
};

export const environment = {
  production: true,
  keycloak: keycloakConfig,
  keycloakConfig
};
