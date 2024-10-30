import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRountingModule } from './auth-rounting.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRountingModule
  ]
})
export class AuthModule { }
