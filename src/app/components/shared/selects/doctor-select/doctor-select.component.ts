import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DoctorModel } from "../../../../models/doctor.model";
import { DoctorReadableService } from "../../../../services/doctor.service";
import { DepartmentReadableService } from "../../../../services/department.service";


@Component({
  selector: 'app-doctor-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './doctor-select.component.html',
  styleUrl: './doctor-select.component.css'
})
export class DoctorSelectComponent implements OnInit {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput!: FormControl<any>
  @Input() placeholder?: string
  constructor(private service: DoctorReadableService, private departmentService:DepartmentReadableService ) {
  }

  ngOnInit(): void {
    this.getDoctors();
  }

  doctorList: DoctorModel[] = []
  getDoctors(): void {
    this.service.getList().subscribe((res) => {
      this.doctorList = res.items ?? []
    });
  }

  getDoctorsByDepartmentID(departmentID: number): void {
    this.departmentService.getDoctorsByDepartmentID(departmentID).subscribe(res => { this.doctorList = res.items ?? [] })
  }

  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }
}
