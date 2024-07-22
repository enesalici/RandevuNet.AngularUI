import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DoctorModel } from "../models/doctor.model";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { IWritableService, WritableService } from "../../core/services/writable.service";
import { DoctorScheduleSlotResponseModel } from "../models/doctor-schedule-slot.model ";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DoctorReadableService extends ReadableService<DoctorModel> implements IReadableService<DoctorModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Doctors"
  }

  getScheduleSlotsByDoctorID(doctorID: string,path?: string): Observable<DoctorScheduleSlotResponseModel[]> {
    var url = `${this.baseUrl}/${doctorID}/schedule-slots`

    return this._http.get<DoctorScheduleSlotResponseModel[]>(url);
  }

}

@Injectable({
  providedIn: 'root',
})
export class DoctorWritableService extends WritableService<DoctorModel> implements IWritableService<DoctorModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Doctors"
  }

}
