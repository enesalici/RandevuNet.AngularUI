import { Component, OnInit, ViewChild } from '@angular/core';
import { SubmitButtonComponent } from "../../../../../core/components/shared/widgets/buttons/submit-button/submit-button.component";
import { CancelButtonComponent } from "../../../../../core/components/shared/widgets/buttons/cancel-button/cancel-button.component";
import { HospitalSelectComponent } from "../../../shared/selects/hospital-select/hospital-select.component";
import { DepartmentSelectComponent } from "../../../shared/selects/department-select/department-select.component";
import { DoctorSelectComponent } from "../../../shared/selects/doctor-select/doctor-select.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppoinmentSearchFormModel, AvailableDoctorRequestModel, AvailableDoctorResponseModel } from '../../../../models/appointment-search.model';
import { DepartmentReadableService } from '../../../../services/department.service';
import { MessageBoxComponent } from "../../../shared/info/message-box/message-box.component";
import { AvailableDoctorsComponent } from "./components/available-doctors/available-doctors.component";

@Component({
  selector: 'app-create-appoinment-page',
  standalone: true,
  imports: [SubmitButtonComponent, CancelButtonComponent, HospitalSelectComponent, DepartmentSelectComponent, DoctorSelectComponent, ReactiveFormsModule, MessageBoxComponent, AvailableDoctorsComponent],
  templateUrl: './create-appoinment-page.component.html',
  styleUrl: './create-appoinment-page.component.scss'
})
export class CreateAppoinmentPageComponent implements OnInit {


  searchForm!: FormGroup<AppoinmentSearchFormModel>;
  formSubmitted: boolean = false;

  get controls() { return this.searchForm.controls; }
  isFormInvalid = (fc: FormControl) => fc.invalid && (fc.dirty || fc.touched || this.formSubmitted)

  @ViewChild(DepartmentSelectComponent) departmentSelect!: DepartmentSelectComponent;
  @ViewChild(DoctorSelectComponent) doctorSelect!: DoctorSelectComponent;

  isSearchCompleted: boolean = false;
  availableDoctorList: AvailableDoctorResponseModel[] = [];

  constructor(private departmentService: DepartmentReadableService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup<AppoinmentSearchFormModel>({
      hospitalID: new FormControl(0,),
      departmentID: new FormControl(0,),
      doctorID: new FormControl("0"),
      date: new FormControl("Seçilmedi")
    })

    this.resetAll();
  }

  hospitalChanged(): void {
    this.resetSearchCompleted();
    this.resetSelectedDoctor();
    this.resetSelectedDepartment();
    if (this.searchForm.value.hospitalID != 0) {
      this.departmentSelect.getDepartmentsByHospitalID(this.searchForm.value.hospitalID ?? 0);
      this.searchForm.controls.departmentID.enable();
    }
  }

  departmentChanged(): void {
    this.resetSearchCompleted();
    this.resetSelectedDoctor();
    if (this.searchForm.value.departmentID != 0) {
      this.doctorSelect.getDoctorsByDepartmentID(this.searchForm.value.departmentID ?? 0);
      this.searchForm.controls.doctorID.enable();
    }
  }

  doctorChanged(): void {
  }

  searchAppoinment(): void {
    this.formSubmitted = true;
    if (this.searchForm.invalid) {
      return;
    }

    this.getAvailableDoctors()
  }

  getAvailableDoctors(): void {
    var req = new AvailableDoctorRequestModel()
    req.departmentID = this.controls.departmentID.value ?? 0;
    req.doctorID = this.controls.doctorID.value == "0" ? null : this.controls.doctorID.value;
    req.date = this.controls.date.value == "Seçilmedi" ? null : this.controls.date.value;

    console.log(req);
    this.departmentService.getAvailableDoctors(req).subscribe(res =>{
      this.availableDoctorList = res;


      this.isSearchCompleted = true;
    } );
  }


  resetAll(): void {
    this.resetSelectedHospital();
    this.resetSelectedDepartment();
    this.resetSelectedDoctor();
    this.resetSelectedDate();
    this.resetSearchCompleted();
  }


  resetSelectedHospital(): void {
    this.searchForm.controls.hospitalID.setValue(0)
  }

  resetSelectedDepartment(): void {
    this.searchForm.controls.departmentID.setValue(0)
    this.searchForm.controls.departmentID.disable()
  }

  resetSelectedDoctor(): void {
    this.searchForm.controls.doctorID.setValue("0")
    this.searchForm.controls.doctorID.disable()
  }

  resetSearchCompleted(): void {
    this.isSearchCompleted = false;
  }

  // ---------- DatePicker ----------
  selectedDateFocusEvent?: FocusEvent
  resetSelectedDate(): void {
    // this.appointmentSearchForm.controls.date.setValue(new Date().toISOString().split('T')[0])
    if (this.selectedDateFocusEvent != null && this.selectedDateFocusEvent.target != null) {
      this.resetSelectedDateType();
    }
    this.searchForm.controls.date.setValue("Seçilmedi")
  }

  dateFocus(event: FocusEvent) {
    this.selectedDateFocusEvent = event;

    const input = event.target as HTMLInputElement;
    this.changeElementType(input, "date")
  }

  dateBlur(event: FocusEvent) {
    this.selectedDateFocusEvent = event;

    const input = event.target as HTMLInputElement;

    if (input.value === '') {
      this.changeElementType(input, "text")
      this.resetSelectedDate();
    }
    else this.changeElementType(input, "date")
  }

  resetSelectedDateType(): void {
    const input = this.selectedDateFocusEvent?.target as HTMLInputElement;
    this.changeElementType(input, "text")
  }

  changeElementType(element: HTMLInputElement, type: string): void {
    element.type = type;
  }
  // ---------- DatePicker ----------

}
