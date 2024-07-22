import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface UserOperationClaimModel extends BaseModel<number> {
  userId: string;
  operationClaimId: number;
  operationClaimName: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

export interface UserOperationClaimFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  userId: FormControl<string | null>;
  operationClaimId: FormControl<number | null>;
}

