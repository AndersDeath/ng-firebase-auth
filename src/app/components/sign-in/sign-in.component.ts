import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  @Input() set formData(data: any) {
    let email = data.email || '';
    let remember = data.rememeber || false;
    if(localStorage.getItem('saved_email') && email === '') {
      email = localStorage.getItem('saved_email');
      remember = true;
    }
    this.loginForm.setValue({
      email: email,
      password: data.password,
      remember: remember
    })
  }
  @Output() formDataEmitter = new EventEmitter<any>();

  public loginForm: UntypedFormGroup;
  constructor(
    public fb: UntypedFormBuilder,
    private router: Router
    ) {
      this.loginForm = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]],
        remember: [false, []],
      })
  }

  sendFormData(form: UntypedFormGroup) {
    this.formDataEmitter.emit({
      email: form.value.email,
      password: form.value.password,
      remember: form.value.remember
    });
    console.log(form.value.remember);
    if(form.value.remember === true) {
      localStorage.setItem('saved_email', form.value.email);
    } else {
      localStorage.removeItem('saved_email');
    }
    // this.router.navigate(['dashboard']);
    // localStorage.setItem('isLogin', 'true');
  }

}
