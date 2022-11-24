import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.adminAxcess) {
      return true;
    }
    alert('❌ You are not allowed to view this page');
    this.router.navigateByUrl('/admin-login');
    return false;
  }
}
