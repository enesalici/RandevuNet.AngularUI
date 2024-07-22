import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CityReadableService } from '../../../../services/city.service';
import { CityModel } from '../../../../models/city.model';
import { CountryReadableService } from '../../../../services/country.service';
import { DoctorTitleReadableService } from '../../../../services/doctor-title.service';
import { DoctorTitleModel } from '../../../../models/doctor-title.model';
import { HospitalDepartmentReadableService } from '../../../../services/hospital-department.service';
import { HospitalDepartmentModel } from '../../../../models/hospital-department.model';



@Component({
  selector: 'app-hospital-department-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hospital-department-select.component.html',
  styleUrl: './hospital-department-select.component.css'
})
export class HospitalDepartmentSelectComponent implements OnInit {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput!: FormControl<any>
  @Input() placeholder?: string

  constructor(private service:HospitalDepartmentReadableService) {}

  ngOnInit(): void {
    this.getHospitalDepartment()
  }

  hospitalDepartmentList: HospitalDepartmentModel[] = []
  getHospitalDepartment(): void {
    this.service.getList().subscribe((res) => {
      this.hospitalDepartmentList = res.items ?? []
    });
  }

  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }
}
