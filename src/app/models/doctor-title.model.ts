import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface DoctorTitleModel extends BaseModel<number> {
  name: string | null;
  levelIndex: number;
}

export interface DoctorTitleFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  name: FormControl<string | null>;
  levelIndex: FormControl<number | null>;
}
