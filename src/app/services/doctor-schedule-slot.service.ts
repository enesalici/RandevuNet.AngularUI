import { HttpClient } from "@angular/common/http";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { DoctorScheduleSlotModel } from "../models/doctor-schedule-slot.model ";
import { Injectable } from "@angular/core";
import { IWritableService, WritableService } from "../../core/services/writable.service";

@Injectable({
  providedIn: 'root',
})
export class DoctorScheduleSlotReadableService extends ReadableService<DoctorScheduleSlotModel> implements IReadableService<DoctorScheduleSlotModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/DoctorScheduleSlots"
  }
}

@Injectable({
  providedIn: 'root',
})
export class DoctorScheduleSlotWritableService extends WritableService<DoctorScheduleSlotModel> implements IWritableService<DoctorScheduleSlotModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/DoctorScheduleSlots"
  }

}
