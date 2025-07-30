@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
    constructor(private keycloak: KeycloakService) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRoles = route.data['roles'];
        return expectedRoles.some((role: string) => this.keycloak.isUserInRole(role));
    }
}
