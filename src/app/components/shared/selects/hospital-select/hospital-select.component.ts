import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { HospitalReadableService } from '../../../../services/hospital.service';
import { HospitalModel } from '../../../../models/hospital.model';

@Component({
  selector: 'app-hospital-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hospital-select.component.html',
  styleUrl: './hospital-select.component.css'
})
export class HospitalSelectComponent implements OnInit {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput!: FormControl<any>
  @Input() placeholder?: string

  constructor(private service: HospitalReadableService) {
  }

  ngOnInit(): void {
    this.getHospitals();
  }

  hospitalList: HospitalModel[] = []
  getHospitals(): void {
    this.service.getList().subscribe((res) => {
      this.hospitalList = res.items ?? []
    });
  }

  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }
}
