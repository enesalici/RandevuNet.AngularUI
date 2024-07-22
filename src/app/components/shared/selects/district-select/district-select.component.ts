import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DistrictReadableService } from '../../../../services/district.service';
import { DistrictModel } from '../../../../models/district.model';
import { CityReadableService } from '../../../../services/city.service';



@Component({
  selector: 'app-district-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './district-select.component.html',
  styleUrl: './district-select.component.css'
})
export class DistrictSelectComponent implements OnInit {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput!: FormControl<any>
  @Input() placeholder?: string
  constructor(private service: DistrictReadableService,private cityService:CityReadableService) {}

  ngOnInit(): void {
    this.getDistricts();
  }

  districtList: DistrictModel[] = []
  getDistricts(): void {
    this.service.getList().subscribe((res) => {
      this.districtList = res.items ?? []
    });
  }

  getDistrictsByCityID(cityID:number): void {
    this.cityService.getDistrictsByCityID(cityID).subscribe((res) => {
      this.districtList = res.items ?? []
    });
  }



  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }
}
