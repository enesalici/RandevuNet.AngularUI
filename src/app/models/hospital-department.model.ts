import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface HospitalDepartmentModel extends BaseModel<number> {
  hospitalID: number;
  hospitalName?: string;
  departmentName: string;
  departmentID: number;
}

export interface HospitalDepartmentFormModel extends IBaseFormModel {
  id: FormControl<any | null>;
  hospitalID: FormControl<number | null>;
  departmentID: FormControl<number | null>;
}
