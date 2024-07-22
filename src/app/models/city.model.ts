import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface CityModel extends BaseModel<number> {
  name: string | null;
  countryID: number;
  countryName: string | null;
}

export interface CityFormModel extends IBaseFormModel {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  countryID: FormControl<number | null>;
}
