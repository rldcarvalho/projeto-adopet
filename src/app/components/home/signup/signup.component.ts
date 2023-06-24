import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordMatchValidator } from './PasswordMatch.validator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({});
  password: string = '';
  hidePassword: boolean = true;
  eyeIcon: string = "../../../assets/img/eye.svg";
  eyeClosedIcon: string = '../../../assets/img/eye-closed.svg';

  constructor(private fb: FormBuilder){
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },{
      validator: PasswordMatchValidator('password', 'confirmPassword')
    })
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  register(): void{}

}
