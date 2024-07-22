import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface HospitalAddressModel extends BaseModel<number> {
  title: string | null;
  detail: string | null;
  hospitalID: number;
  hospitalName: string | null;
  quarterID: number;
  quarterName: string | null;
  districtID: number;
  districtName: string | null;
  cityID: number;
  cityName: string | null;
  countryID: number;
  countryName: string | null;
}

export interface HospitalAddressFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  title: FormControl<string | null>
  detail: FormControl<string | null>
  hospitalID: FormControl<number | null>
  quarterID: FormControl<number | null>
  districtID: FormControl<number | null>
  cityID: FormControl<number | null>
  countryID: FormControl<number | null>
}
