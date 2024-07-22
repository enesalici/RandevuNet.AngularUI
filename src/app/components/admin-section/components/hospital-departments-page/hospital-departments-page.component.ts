import { Component, ViewChild } from '@angular/core';
import { HospitalDepartmentReadableService, HospitalDepartmentWritableService } from '../../../../services/hospital-department.service';
import { HospitalDepartmentFormModel, HospitalDepartmentModel } from '../../../../models/hospital-department.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { DepartmentSelectComponent } from "../../../shared/selects/department-select/department-select.component";
import { HospitalSelectComponent } from "../../../shared/selects/hospital-select/hospital-select.component";

@Component({
  selector: 'app-hospital-departments-page',
  standalone: true,
  imports: [BaseCrudPageComponent, DepartmentSelectComponent, HospitalSelectComponent],
  templateUrl: './hospital-departments-page.component.html',
  styleUrl: './hospital-departments-page.component.scss'
})
export class HospitalDepartmentsPageComponent {
  @ViewChild(HospitalSelectComponent) hospitalSelect?: HospitalSelectComponent;
  @ViewChild(DepartmentSelectComponent) departmentSelect?: DepartmentSelectComponent;

  constructor(protected readableService: HospitalDepartmentReadableService, protected writableService: HospitalDepartmentWritableService) { }

  formControls!: HospitalDepartmentFormModel
  displayedColumns: ColumnOption[] =
  [
    { propertName: "hospitalName", displayText: "Hastane" },
    { propertName: "departmentName", displayText: "Poliklinik" },
  ];

  ngOnInit(): void {
    this.formControls = {
      id:   new FormControl(0),
      hospitalID: new FormControl(0, Validators.required),
      departmentID: new FormControl(0, Validators.required)
    }
    this.resetSelectedDepartment()
  }

  setEditingData(data: Partial<HospitalDepartmentModel>) {
    this.formControls.id.setValue(data.id ?? 0)
    this.formControls.hospitalID.setValue(data.hospitalID ?? 0)
    this.formControls.departmentID.setValue(data.departmentID ?? 0)
  }



  hospitalChanged() {
    this.resetSelectedDepartment()
    if (this.formControls.hospitalID.value != 0 ) {
      this.hospitalSelect?.getHospitals();
    this.formControls.departmentID.enable()

    }
  }

  resetSelectedDepartment(): void {
    this.formControls.departmentID.setValue(0)
    this.formControls.departmentID.disable()
  }
}
