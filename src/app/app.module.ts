import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/home/signin/signin.component';
import { SignupComponent } from './components/home/signup/signup.component';
import { MessageComponent } from './components/pets/message/message.component';
import { ProfileComponent } from './components/pets/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MsgWarningComponent } from './components/msg-warning/msg-warning.component';
import { PasswordMatchDirective } from './directives/password-match.directive';
import { PetComponent } from './components/pets/pet/pet.component';
import { PetsListComponent } from './components/pets/pets-list/pets-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user/userService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    MessageComponent,
    ProfileComponent,
    MsgWarningComponent,
    PasswordMatchDirective,
    PetComponent,
    PetsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
