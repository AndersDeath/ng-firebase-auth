import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from '../../shared/services/auth.service';

@UntilDestroy()
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
    this.userData = this.authService.userData;
  }

  logout() {
    this.authService.signOut();
  }

}
