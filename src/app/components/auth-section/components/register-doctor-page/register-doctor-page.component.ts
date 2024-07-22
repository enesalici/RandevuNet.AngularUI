import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterDoctorFormModel, RegisterDoctorModel, RegisterFormModel, RegisterModel } from '../../../../models/register.model';
import { AuthService } from '../../../../services/auth.service';
import { SwalService } from '../../../../services/swal.service';
import { Router, RouterModule } from '@angular/router';
import { DoctorTitleSelectComponent } from "../../../shared/selects/doctor-title-select/doctor-title-select.component";
import { HospitalSelectComponent } from "../../../shared/selects/hospital-select/hospital-select.component";
import { DepartmentSelectComponent } from "../../../shared/selects/department-select/department-select.component";

@Component({
  selector: 'app-register-doctor-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, DoctorTitleSelectComponent, HospitalSelectComponent, DepartmentSelectComponent],
  templateUrl: './register-doctor-page.component.html',
  styleUrl: './register-doctor-page.component.scss'
})
export class RegisterDoctorPageComponent {

  registerForm!: FormGroup<RegisterDoctorFormModel>

  constructor(private auth: AuthService, private router: Router, private swal:SwalService) { }
  @ViewChild(DepartmentSelectComponent) departmentSelect!: DepartmentSelectComponent;

  ngOnInit(): void {
    this.registerForm = new FormGroup<RegisterDoctorFormModel>({
      id:new  FormControl(''),
      firstName:new  FormControl('', Validators.required),
      lastName:new  FormControl('', Validators.required),
      email:new  FormControl('', [Validators.required,Validators.email]),
      password:new  FormControl('', Validators.required),
      phoneNumber:new  FormControl(''),
      doctorTitleID:new  FormControl(0,Validators.required),
      hospitalDepartmentID:new  FormControl(0,Validators.required),
      hospitalID:new  FormControl(0,Validators.required),
    });

    this.resetSelectedDepartment();
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    const data = this.registerForm.value as RegisterDoctorModel;

    this.auth.registerDoctor(data).subscribe((res)=>{
      this.swal.callToast("Kayıt Başarılı")
      this.router.navigateByUrl("/auth/login");
    })
  }

  hospitalChanged(): void {
    this.resetSelectedDepartment();
    if (this.registerForm.value.hospitalID != 0) {
      this.departmentSelect.getDepartmentsByHospitalID(this.registerForm.value.hospitalID ?? 0);
      this.registerForm.controls.hospitalDepartmentID.enable();
    }
  }

  resetSelectedDepartment(): void {
    this.registerForm.controls.hospitalDepartmentID.setValue(0)
    this.registerForm.controls.hospitalDepartmentID.disable()
  }
}
