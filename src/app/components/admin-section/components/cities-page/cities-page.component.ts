import { Component } from '@angular/core';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { CityReadableService, CityWritableService } from '../../../../services/city.service';
import { CityFormModel, CityModel } from '../../../../models/city.model';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";
import { CountrySelectComponent } from "../../../shared/selects/country-select/country-select.component";

@Component({
  selector: 'app-cities-page',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent, CountrySelectComponent],
  templateUrl: './cities-page.component.html',
  styleUrl: './cities-page.component.scss'
})
export class CitiesPageComponent {
  constructor(protected readableService: CityReadableService, protected writableService: CityWritableService) { }

  formControls!: CityFormModel
  displayedColumns: ColumnOption[] =
  [
    { propertName: "countryName", displayText: "Ülke" },
    { propertName: "name", displayText: "Şehir" },
  ];

  ngOnInit(): void {
    this.formControls = {
      id:   new FormControl(0),
      name: new FormControl('', Validators.required),
      countryID: new FormControl(0, Validators.required)
    }
  }

  setEditingData(data: Partial<CityModel>) {
    this.formControls.id.setValue(data.id ?? 0)
    this.formControls.name.setValue(data.name ?? "")
    this.formControls.countryID.setValue(data.countryID ?? 0)
  }

}
