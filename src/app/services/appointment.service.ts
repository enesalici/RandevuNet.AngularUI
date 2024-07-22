import { Injectable } from "@angular/core";
import { AppointmentModel } from "../models/appointment.model";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { HttpClient } from "@angular/common/http";
import { IWritableService, WritableService } from "../../core/services/writable.service";

@Injectable({
  providedIn: 'root',
})
export class AppointmentReadableService extends ReadableService<AppointmentModel> implements IReadableService<AppointmentModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Appointments"
  }

}

@Injectable({
  providedIn: 'root',
})
export class AppointmentWritableService extends WritableService<AppointmentModel> implements IWritableService<AppointmentModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Appointments"
  }

}
