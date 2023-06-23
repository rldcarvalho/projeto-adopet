import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  password: string = '';
  hidePassword: boolean = true;
  eyeIcon: string = "../../../assets/img/eye.svg";
  eyeClosedIcon: string = '../../../assets/img/eye-closed.svg';

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  register(form: NgForm): void{}

}
