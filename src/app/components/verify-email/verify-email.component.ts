import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  public email: string = '';
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() {
    this.email = this.authService.userData.email;
  }

  sendVerification() {
    this.authService.sendVerificationMail();
  }
}
