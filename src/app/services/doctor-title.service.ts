import { Injectable } from "@angular/core";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { DoctorTitleModel } from "../models/doctor-title.model";
import { HttpClient } from "@angular/common/http";
import { IWritableService, WritableService } from "../../core/services/writable.service";

@Injectable({
  providedIn: 'root',
})
export class DoctorTitleReadableService extends ReadableService<DoctorTitleModel> implements IReadableService<DoctorTitleModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/DoctorTitles"
  }


}

@Injectable({
  providedIn: 'root',
})
export class DoctorTitleWritableService extends WritableService<DoctorTitleModel> implements IWritableService<DoctorTitleModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/DoctorTitles"
  }

}
