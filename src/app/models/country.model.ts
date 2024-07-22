import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface CountryModel extends BaseModel<number> {
  name: string | null;
}

export interface CountryFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  name: FormControl<string | null>;
}



