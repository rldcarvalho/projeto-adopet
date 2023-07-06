import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordMatchValidator } from './PasswordMatch.validator';
import { UserService } from 'src/app/shared/user/userService';
import { User } from 'src/app/shared/user/user';
import { Router } from '@angular/router';


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

  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private router: Router
    ){
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

  register(): void{
    if (this.signupForm.valid){
      const newUser: User = {
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        name: this.signupForm.value.name,
        phone: '',
        city: '',
        about: '',
        image: ''
      }
      this.userService.createUser(newUser).subscribe(() => {
        this.router.navigate(['/signin'])
      }, (error) => {
        console.error('Erro ao criar usuário:', error);
      });
    };

  }

}
