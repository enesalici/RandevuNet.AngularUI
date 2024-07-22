import { Component } from '@angular/core';
import { DoctorReadableService, DoctorWritableService } from '../../../../services/doctor.service';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoctorFormModel, DoctorModel } from '../../../../models/doctor.model';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";
import { DoctorTitleSelectComponent } from "../../../shared/selects/doctor-title-select/doctor-title-select.component";
import { HospitalDepartmentSelectComponent } from "../../../shared/selects/hospital-department-select/hospital-department-select.component";

@Component({
  selector: 'app-doctor-page',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent, ReactiveFormsModule, DoctorTitleSelectComponent, HospitalDepartmentSelectComponent],
  templateUrl: './doctor-page.component.html',
  styleUrl: './doctor-page.component.scss'
})
export class DoctorPageComponent {

  constructor(protected readableService: DoctorReadableService, protected writableService: DoctorWritableService) { }

  formControls!: DoctorFormModel
  displayedColumns: ColumnOption[] = [
    { propertName: "doctorTitleName", displayText: "Ünvan" },
    { propertName: "firstName", displayText: "İsim" },
    { propertName: "lastName", displayText: "Soyisim" },
    { propertName: "hospitalName", displayText: "Hastane" },
    { propertName: "departmentName", displayText: "Poliklinik" },
    { propertName: "email", displayText: "Email" },
    { propertName: "phoneNumber", displayText: "Telefon No." },
    { propertName: "education", displayText: "Eğitim" },
  ];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl(''),
      phoneNumber: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      education: new FormControl('', Validators.required),
      profilePhoto: new FormControl('', Validators.required),
      doctorTitleID: new FormControl(0, Validators.required),
      hospitalDepartmentID: new FormControl(0, Validators.required),
    }

  }

  setEditingData(data: Partial<DoctorModel>) {
    this.formControls.id.setValue(data.id)
    this.formControls.firstName.setValue(data.firstName ?? "")
    this.formControls.lastName.setValue(data.lastName ?? "")
    this.formControls.email.setValue(data.email ?? "")
    this.formControls.password.setValue(data.password ?? "")
    this.formControls.phoneNumber.setValue(data.phoneNumber ?? "")
    this.formControls.about.setValue(data.about ?? "")
    this.formControls.education.setValue(data.education ?? "")
    this.formControls.profilePhoto.setValue(data.profilePhoto ?? "")
    this.formControls.doctorTitleID.setValue(data.doctorTitleID ?? 0)
    this.formControls.hospitalDepartmentID.setValue(data.hospitalDepartmentID ?? 0)
  }
}
