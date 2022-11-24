import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private router: Router, private authService: AuthService, ) { }

  logout(){
    this.authService.adminAxcess = false;
    this.router.navigateByUrl('/admin-login');
  }
  
}
