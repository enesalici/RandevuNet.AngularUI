import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface RegisterDoctorModel extends BaseModel<string> {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  password: string,
  doctorTitleID: number,
  hospitalDepartmentID:number
  userRoleID: number

}

export interface RegisterModel extends BaseModel<string> {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  password: string
  userRoleID: number
}

export interface RegisterFormModel extends IBaseFormModel {
  id: FormControl<any | null>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string   | null>;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface RegisterDoctorFormModel extends IBaseFormModel {
  id: FormControl<any | null>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string   | null>;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  password: FormControl<string | null>;
  doctorTitleID: FormControl<number | null>;
  hospitalDepartmentID: FormControl<number | null>;
  hospitalID: FormControl<number | null>;
}
