import { FormControl } from "@angular/forms";

export interface AppoinmentSearchFormModel {
  hospitalID:FormControl<number | null>
  departmentID: FormControl<number | null>;
  doctorID: FormControl<string | null>;
  date: FormControl<string | null>;
}

export class AvailableDoctorRequestModel {
  departmentID: number = 0;
  doctorID?: string | null
  date?: string | null
}

export interface AvailableDoctorResponseModel {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  doctorTitleID: number;
  doctorTitleName?: string;
  doctorTitleLevelIndex?: string;
  phoneNumber: string | null;
  about: string | null;
  education: string | null;
  profilePhoto: string | null;
}


