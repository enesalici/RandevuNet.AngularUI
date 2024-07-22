import { Component } from '@angular/core';
import { RegisterFormModel, RegisterModel } from '../../../../models/register.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SwalService } from '../../../../services/swal.service';
import { AuthService } from '../../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {


  registerForm!: FormGroup<RegisterFormModel>

  constructor(private auth: AuthService, private router: Router, private swal:SwalService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup<RegisterFormModel>({
      id:new  FormControl(''),
      firstName:new  FormControl('', Validators.required),
      lastName:new  FormControl('', Validators.required),
      email:new  FormControl('', [Validators.required,Validators.email]),
      password:new  FormControl('', Validators.required),
      phoneNumber:new  FormControl(''),
    });
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    const data = this.registerForm.value as RegisterModel;

    this.auth.register(data).subscribe((res)=>{
      this.swal.callToast("Kayıt Başarılı")
      this.router.navigateByUrl("/auth/login");
    })
  }
}
