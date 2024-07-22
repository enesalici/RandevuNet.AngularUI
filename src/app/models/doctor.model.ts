import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";


export interface DoctorModel extends BaseModel<string> {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  password:  string | null;
  about: string | null;
  education: string | null;
  profilePhoto: string | null;
  doctorTitleID: number;
  hospitalDepartmentID: number;
  doctorTitleName?: string;
}

export interface DoctorFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  password:  FormControl<string | null>;
  about: FormControl<string | null>;
  education: FormControl<string | null>;
  profilePhoto: FormControl<string | null>;
  doctorTitleID: FormControl<number | null>;
  hospitalDepartmentID: FormControl<number | null>;
}
