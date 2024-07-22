import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface AppointmentModel extends BaseModel<string> {
  doctorTitle: string | null;
  doctorFirstName: string | null;
  doctorLastName: string | null;
  patientFirstName: string | null;
  patientLastName: string | null;
  patientEmail: string | null;
  hospitalName: string | null;
  departmentName: string | null;
  date: Date;
  startTime: string;
  endTime: string;
  status: AppointmentStatus;
  patientId: string;
  doctorId: string;
  doctorScheduleSlotId: number;
}

export interface AppointmentFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  patientId: FormControl<string | null>;
  doctorScheduleSlotId: FormControl<number | null>;
}

export type AppointmentStatus = 0 | 1 | 2 | 3;
