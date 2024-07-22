import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DepartmentModel } from '../../../../models/department.model';
import { DepartmentReadableService } from '../../../../services/department.service';
import { HospitalReadableService } from '../../../../services/hospital.service';


@Component({
  selector: 'app-department-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './department-select.component.html',
  styleUrl: './department-select.component.css'
})
export class DepartmentSelectComponent{
  constructor(private service:DepartmentReadableService,private hospitalService:HospitalReadableService) {
  }

  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput?: FormControl<any>
  @Input() placeholder?: string

  ngOnInit(): void {
    this.getDepartments()
  }


  departmentList:DepartmentModel[]=[]
  getDepartments(): void {
    this.service.getList().subscribe((res) => {
      this.departmentList = res.items ?? []
    });
  }

  getDepartmentsByHospitalID(hospitalID:number): void {
    this.hospitalService.getDepartmentsByHospitalID(hospitalID).subscribe((res) => {
      this.departmentList = res.items ?? []
    });
  }


  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }

}

