import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface HospitalModel extends BaseModel<number> {
  name: string | null;
}

export interface HospitalFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  name: FormControl<string | null>;
}
