import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './login.routes';
import { SharedModule } from '../shared-module/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class LoginModule { }
