import { Injectable } from "@angular/core";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { HttpClient } from "@angular/common/http";
import { IWritableService, WritableService } from "../../core/services/writable.service";
import { HospitalDepartmentModel } from "../models/hospital-department.model";

@Injectable({
  providedIn: 'root',
})
export class HospitalDepartmentReadableService extends ReadableService<HospitalDepartmentModel> implements IReadableService<HospitalDepartmentModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/HospitalDepartments"
  }

}

@Injectable({
  providedIn: 'root',
})
export class HospitalDepartmentWritableService extends WritableService<HospitalDepartmentModel> implements IWritableService<HospitalDepartmentModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/HospitalDepartments"
  }
}
