import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/user/user';
import { UserService } from 'src/app/shared/user/userService';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  signinForm: FormGroup = new FormGroup({});
  password: string = '';
  hidePassword: boolean = true;
  eyeIcon: string = "../../../assets/img/eye.svg";
  eyeClosedIcon: string = '../../../assets/img/eye-closed.svg';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private authService: AuthService) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  login(): void {
    if (this.signinForm.valid) {
      const email = this.signinForm.get('email')?.value;
      const password = this.signinForm.get('password')?.value;

      this.userService.getUserByEmail(email).subscribe(
        (user: User | null) => {
          if (user && user.password === password) {
            console.log('Usuário autenticado:', user);
            this.authService.currentUser = user;
            this.router.navigateByUrl('/pets');
          } else {
            console.error('Credenciais inválidas');
          }
        },
        (error: any) => {
          console.error('Erro ao obter usuário:', error);
        }
      );
    }
  }
  }
