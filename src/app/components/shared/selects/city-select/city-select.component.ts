import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CityReadableService } from '../../../../services/city.service';
import { CityModel } from '../../../../models/city.model';
import { CountryReadableService } from '../../../../services/country.service';



@Component({
  selector: 'app-city-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './city-select.component.html',
  styleUrl: './city-select.component.css'
})
export class CitySelectComponent implements OnInit {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput!: FormControl<any>
  @Input() placeholder?: string

  constructor(private service: CityReadableService,private countryService:CountryReadableService) {}

  ngOnInit(): void {
    this.getCities()
  }

  cityList: CityModel[] = []
  getCities(): void {
    this.service.getList().subscribe((res) => {
      this.cityList = res.items ?? []
    });
  }

  getCitiesByCountryID(countryID:number): void {
    this.countryService.getCitiesByCountryID(countryID).subscribe((res) => {
      this.cityList = res.items ?? []
    });
  }

  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }
}
