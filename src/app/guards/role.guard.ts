import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { map, Observable } from "rxjs";
import { AuthPaths } from "../routes/auth.routes";


@Injectable({
  providedIn: 'root'
})
export class RoleGuard {

  constructor(private authService: AuthService, private router: Router) { }

  canActivateChild: CanActivateChildFn =
    (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {

      const requiredRoles = childRoute.data['requiredRoles'];
      if (!this.authService.isAuthenticated(requiredRoles))
        return this.router.navigateByUrl("/forbiden");

      return true
    }
}
