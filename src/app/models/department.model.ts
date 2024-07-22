import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";


export interface DepartmentModel extends BaseModel<number> {
  name?:string
  departmentID?:number
  departmentName?:string
}

export interface DepartmentFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  name: FormControl<string | null>;
}


