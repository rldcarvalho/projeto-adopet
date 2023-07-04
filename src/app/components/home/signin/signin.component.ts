import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/user/user';
import { UserService } from 'src/app/shared/user/userService';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
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

      // Fazer a chamada para obter o usuário com base no email
      this.userService.getUserByEmail(email).subscribe(
        (user: User | null) => {
          if (user && user.password === password) {
            // Autenticação bem-sucedida
            console.log('Usuário autenticado:', user);
            this.router.navigateByUrl('/pets');
          } else {
            // Credenciais inválidas
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
