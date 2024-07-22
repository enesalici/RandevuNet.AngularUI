import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface OperationClaimModel extends BaseModel<number> {
  name: string | null;
}

export interface OperationClaimFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  name: FormControl<string | null>;
}
