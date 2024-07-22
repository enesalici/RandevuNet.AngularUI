import { Routes } from "@angular/router";
import { LoginPageComponent } from "../components/auth-section/components/login-page/login-page.component";
import { AuthLayoutComponent } from "../components/auth-section/layouts/auth-layout/auth-layout.component";
import { RegisterPageComponent } from "../components/auth-section/components/register-page/register-page.component";
import { ForgotPasswordPageComponent } from "../components/auth-section/components/forgot-password-page/forgot-password-page.component";
import { ResetPasswordPageComponent } from "../components/auth-section/components/reset-password-page/reset-password-page.component";
import { RegisterDoctorPageComponent } from "../components/auth-section/components/register-doctor-page/register-doctor-page.component";
import { RegisterTypePageComponent } from "../components/auth-section/components/register-type-page/register-type-page.component";

export class AuthPaths {
  static readonly AUTH_BASE = 'auth';
  static readonly LOGIN = 'login';
  static readonly REGISTER = 'register';
  static readonly REGISTER_PATIENT = 'patient';
  static readonly REGISTER_DOCTOR = 'doctor';
  static readonly FORGOT_PASS = 'forgot-password';
  static readonly RESET_PASS = 'reset-password';
}

export const authRoutes: Routes = [
  {
    path: AuthPaths.AUTH_BASE,
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent,
      },
      {
        path: AuthPaths.LOGIN,
        component: LoginPageComponent,
      },
      {
        path: AuthPaths.REGISTER,
        component: RegisterTypePageComponent,
      },
      {
        path: AuthPaths.REGISTER_PATIENT,
        component: RegisterPageComponent,
      },
      {
        path: AuthPaths.REGISTER_DOCTOR,
        component: RegisterDoctorPageComponent,
      },
      {
        path: AuthPaths.FORGOT_PASS,
        component: ForgotPasswordPageComponent,
      },
      {
        path: AuthPaths.RESET_PASS,
        component: ResetPasswordPageComponent,
      },
    ]
  }
]





