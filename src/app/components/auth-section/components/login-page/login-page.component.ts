import { Component, OnInit } from '@angular/core';
import { LoginFormModel, LoginModel } from '../../../../models/login.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { ErrorService } from '../../../../services/error.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SessionStorageService } from '../../../../services/session-storage.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup<LoginFormModel>

  constructor(private auth: AuthService, private router: Router,private storage:SessionStorageService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup<LoginFormModel>({
      email: new FormControl('admin@randevu.net',Validators.required),
      password: new FormControl('Admin123!',Validators.required),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const data = this.loginForm.value as LoginModel;

    this.auth.login(data, (res) => {

    })
  }
}
