import { FormControl } from "@angular/forms";
import { IBaseFormModel } from "../../core/models/base.model";

export interface LoginModel{
  email: string
  password: string
  authenticatorCode: string
}

export interface LoginFormModel extends IBaseFormModel {
  email:FormControl<any>
  password: FormControl<any>
}
