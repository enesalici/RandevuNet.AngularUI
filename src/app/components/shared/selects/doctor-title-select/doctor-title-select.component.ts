import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CityReadableService } from '../../../../services/city.service';
import { CityModel } from '../../../../models/city.model';
import { CountryReadableService } from '../../../../services/country.service';
import { DoctorTitleReadableService } from '../../../../services/doctor-title.service';
import { DoctorTitleModel } from '../../../../models/doctor-title.model';



@Component({
  selector: 'app-doctor-title-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './doctor-title-select.component.html',
  styleUrl: './doctor-title-select.component.css'
})
export class DoctorTitleSelectComponent implements OnInit {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput!: FormControl<any>
  @Input() placeholder?: string

  constructor(private service: DoctorTitleReadableService) {}

  ngOnInit(): void {
    this.getDoctorTitle()
  }

  doctorTitleList: DoctorTitleModel[] = []
  getDoctorTitle(): void {
    this.service.getList().subscribe((res) => {
      this.doctorTitleList = res.items ?? []
    });
  }

  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }
}
