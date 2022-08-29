import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public userData: any;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userData = this.authService.userData
    console.log(this.userData);
  }

  logout() {
    this.authService.signOut();
  }

}
