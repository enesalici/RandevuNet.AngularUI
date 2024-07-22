import { Component, ViewChild } from '@angular/core';
import { QuarterWritableService } from '../../../../services/quarter.service';
import { HospitalAddressReadableService, HospitalAddressWritableService } from '../../../../services/hospital-address.service';
import { CitySelectComponent } from '../../../shared/selects/city-select/city-select.component';
import { DistrictSelectComponent } from '../../../shared/selects/district-select/district-select.component';
import { HospitalAddressFormModel, HospitalAddressModel } from '../../../../models/hospital-addresses.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { CountrySelectComponent } from "../../../shared/selects/country-select/country-select.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";
import { QuarterSelectComponent } from "../../../shared/selects/quarter-select/quarter-select.component";
import { HospitalSelectComponent } from "../../../shared/selects/hospital-select/hospital-select.component";

@Component({
  selector: 'app-hospital-addresses-page',
  standalone: true,
  imports: [BaseCrudPageComponent, CountrySelectComponent, CitySelectComponent, DistrictSelectComponent, StandardInputComponent, QuarterSelectComponent, HospitalSelectComponent],
  templateUrl: './hospital-addresses-page.component.html',
  styleUrl: './hospital-addresses-page.component.scss'
})
export class HospitalAddressesPageComponent {
districtChanged() {
throw new Error('Method not implemented.');
}
  @ViewChild(CitySelectComponent) citySelect?: CitySelectComponent;
  @ViewChild(DistrictSelectComponent) districtSelect?: DistrictSelectComponent;

  constructor(protected readableService:HospitalAddressReadableService, protected writableService: HospitalAddressWritableService) { }

  formControls!:HospitalAddressFormModel
  displayedColumns: ColumnOption[] =
  [
    { propertName: "countryName", displayText: "Ülke" },
    { propertName: "cityName", displayText: "Şehir" },
    { propertName: "districtName", displayText: "İlçe" },
    { propertName: "quarterName", displayText: "Mahalle" },
  ];

  ngOnInit(): void {
    this.formControls = {
      id:   new FormControl(0),
      title: new FormControl(''),
      detail: new FormControl(''),
      hospitalID: new FormControl(0),
      quarterID: new FormControl(0),
      districtID: new FormControl(0, Validators.required),
      cityID: new FormControl(0, Validators.required),
      countryID: new FormControl(0, Validators.required),
    }
    this.resetSelectedCity()
    this.resetSelectedDistrict()
  }

  setEditingData(data: Partial<HospitalAddressModel>) {
    this.formControls.id.setValue(data.id ?? 0)
    this.formControls.title.setValue(data.title ?? "")
    this.formControls.detail.setValue(data.detail ?? "")
    this.formControls.hospitalID.setValue(data.hospitalID ?? 0)
    this.formControls.quarterID.setValue(data.quarterID ?? 0)
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
