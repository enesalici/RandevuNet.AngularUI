import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface DoctorScheduleSlotModel extends BaseModel<number> {
 doctorID: string;
 date: string;
 startTime: string;
 endTime: string ;
}

export interface DoctorScheduleSlotFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  doctorID: FormControl<string | null>;
  date: FormControl<string | null>;
  startTime: FormControl<string | null>;
  endTime: FormControl<string | null>;
}

export interface DoctorScheduleSlotResponseModel {
  id: number
  doctorID: string
  date: string
  startTime: string
  endTime: string
  firstName: string
  lastName: string
  doctorTitleID: number
  doctorTitleName: string
}


