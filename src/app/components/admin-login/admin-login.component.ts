import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void { }
  
  adminLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  get email() {
    return this.adminLoginForm.get('email');
  }
  get password() {
    return this.adminLoginForm.get('password');
  }
  loginAdmin() {
    if (this.email?.value == this.authService.adminEmail && this.password?.value == this.authService.adminPassword) {
      this.authService.adminAxcess = true;
      this.router.navigateByUrl('/admin-home');
    } else {
      this.authService.adminAxcess = false;
      alert(`❌ Incorrect credentials`);
      this.router.navigateByUrl('/admin-login');
    }
  }
}