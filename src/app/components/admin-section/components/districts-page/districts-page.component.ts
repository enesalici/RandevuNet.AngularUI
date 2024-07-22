import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ColumnOption } from '../../../../../core/models/base.model';
import { DistrictReadableService, DistrictWritableService } from '../../../../services/district.service';
import { DistrictFormModel, DistrictModel } from '../../../../models/district.model';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { CountrySelectComponent } from "../../../shared/selects/country-select/country-select.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";
import { CitySelectComponent } from "../../../shared/selects/city-select/city-select.component";

@Component({
  selector: 'app-districts-page',
  standalone: true,
  imports: [BaseCrudPageComponent, CountrySelectComponent, StandardInputComponent, CitySelectComponent],
  templateUrl: './districts-page.component.html',
  styleUrl: './districts-page.component.scss'
})
export class DistrictPageComponent {
  @ViewChild(CitySelectComponent) citySelect?: CitySelectComponent;

  constructor(protected readableService: DistrictReadableService, protected writableService: DistrictWritableService) { }

  formControls!: DistrictFormModel
  displayedColumns: ColumnOption[] =
    [
      { propertName: "countryName", displayText: "Ülke" },
      { propertName: "cityName", displayText: "Şehir" },
      { propertName: "name", displayText: "İlçe" },
    ];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      cityID: new FormControl(0, Validators.required),
      countryID: new FormControl(0, Validators.required),
    }

    this.resetSelectedCity();
  }

  setEditingData(data: Partial<DistrictModel>) {
    this.formControls.id.setValue(data.id ?? 0)
    this.formControls.name.setValue(data.name ?? "")
    this.formControls.cityID.setValue(data.cityID ?? 0)
    this.formControls.countryID.setValue(data.countryID ?? 0)
    this.formControls.cityID.enable();

  }

  countryChanged() {
    this.resetSelectedCity()

    if (this.formControls.countryID.value != 0) {
      this.citySelect?.getCitiesByCountryID(this.formControls.countryID.value ?? 0);
      this.formControls.cityID.enable();
    }

  }

  resetSelectedCity(): void {
    this.formControls.cityID.setValue(0)
    this.formControls.cityID.disable()
  }

}
