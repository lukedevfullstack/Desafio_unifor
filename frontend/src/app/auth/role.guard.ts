import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { KeycloakService } from './keycloak.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
    constructor(private keycloak: KeycloakService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const expectedRoles = route.data['roles'] as string[];
        if (!expectedRoles) return true;

        for (const role of expectedRoles) {
            if (this.keycloak.isUserInRole(role)) {
                return true;
            }
        }

        this.router.navigate(['/forbidden']);
        return false;
    }
}
