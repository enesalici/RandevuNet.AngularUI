import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface QuarterModel extends BaseModel<number> {
  name: string | null;
  districtID: number;
  districtName: string | null;
  cityID: number;
  cityName: string | null;
  countryID: number;
  countryName: string | null;
}

export interface QuarterFormModel extends IBaseFormModel {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  districtID: FormControl<number |null>;
  cityID: FormControl<number | null>;
  countryID: FormControl<number | null>;
}

