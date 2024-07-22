import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "./base.model";

export interface DemoModel extends BaseModel<number> {
  name: string | null;
  address: string | null;
}

export interface DemoFormModel extends IBaseFormModel {
  // id: FormControl<number | null>;
  name: FormControl<string | null>;
  address: FormControl<string | null>;
}
