import { Component, ViewChild } from '@angular/core';
import { QuarterReadableService, QuarterWritableService } from '../../../../services/quarter.service';
import { QuarterFormModel, QuarterModel } from '../../../../models/quarter.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { CountrySelectComponent } from "../../../shared/selects/country-select/country-select.component";
import { CitySelectComponent } from "../../../shared/selects/city-select/city-select.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";
import { DistrictSelectComponent } from "../../../shared/selects/district-select/district-select.component";

@Component({
  selector: 'app-quarters-page',
  standalone: true,
  imports: [BaseCrudPageComponent, CountrySelectComponent, CitySelectComponent, StandardInputComponent, DistrictSelectComponent],
  templateUrl: './quarters-page.component.html',
  styleUrl: './quarters-page.component.scss'
})
export class QuartersPageComponent {
  @ViewChild(CitySelectComponent) citySelect?: CitySelectComponent;
  @ViewChild(DistrictSelectComponent) districtSelect?: DistrictSelectComponent;

  constructor(protected readableService: QuarterReadableService, protected writableService: QuarterWritableService) { }

  formControls!:QuarterFormModel
  displayedColumns: ColumnOption[] =
  [
    { propertName: "countryName", displayText: "Ülke" },
    { propertName: "cityName", displayText: "Şehir" },
    { propertName: "districtName", displayText: "İlçe" },
    { propertName: "name", displayText: "Mahalle" },
  ];

  ngOnInit(): void {
    this.formControls = {
      id:   new FormControl(0),
      name: new FormControl('', Validators.required),
      districtID: new FormControl(0, Validators.required),
      cityID: new FormControl(0, Validators.required),
      countryID: new FormControl(0, Validators.required),
    }
    this.resetSelectedCity()
    this.resetSelectedDistrict()
  }

  setEditingData(data: Partial<QuarterModel>) {
    this.formControls.id.setValue(data.id ?? 0)
    this.formControls.name.setValue(data.name ?? "")
    this.formControls.districtID.setValue(data.districtID ?? 0)
    this.formControls.cityID.setValue(data.cityID ?? 0)
    this.formControls.countryID.setValue(data.countryID ?? 0)

    this.formControls.cityID.enable();
    this.formControls.districtID.enable();

  }


    countryChanged() {
      this.resetSelectedCity()
      this.resetSelectedDistrict()
      if (this.formControls.countryID.value != 0) {
        this.citySelect?.getCitiesByCountryID(this.formControls.countryID.value ?? 0);
        this.formControls.cityID.enable();
      }
    }

    cityChanged() {
      this.resetSelectedDistrict()
      if (this.formControls.cityID.value != 0) {
        this.districtSelect?.getDistrictsByCityID(this.formControls.cityID.value ?? 0);
        this.formControls.districtID.enable();
      }
    }

    resetSelectedCity(): void {
      this.formControls.cityID.setValue(0)
      this.formControls.cityID.disable()
    }

    resetSelectedDistrict(): void {
      this.formControls.districtID.setValue(0)
      this.formControls.districtID.disable()
    }

}
