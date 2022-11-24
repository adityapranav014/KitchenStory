import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }

  adminEmail: string = 'admin@gmail.com';
  adminPassword: any = '12345678';
  adminAxcess?: boolean;

}
