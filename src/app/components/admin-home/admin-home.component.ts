import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private adminService: AdminService ) { }

  logout() {
    this.adminService.logout();
  }

}
