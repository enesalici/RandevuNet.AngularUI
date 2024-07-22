import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface DistrictModel extends BaseModel<number> {
  name: string | null;
  cityID: number;
  cityName: string | null;
  countryID: number;
  countryName: string | null;
}

export interface DistrictFormModel extends IBaseFormModel {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  cityID: FormControl<number | null>;
  countryID: FormControl<number | null>;
}

