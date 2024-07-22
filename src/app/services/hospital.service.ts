import { Injectable } from "@angular/core";
import { HospitalModel } from "../models/hospital.model";
import { IWritableService, WritableService } from "../../core/services/writable.service";
import { HttpClient } from "@angular/common/http";
import { GetListResponse } from "../models/get-list.response.model";
import { Observable } from "rxjs";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { DepartmentModel } from "../models/department.model";

@Injectable({
  providedIn: 'root',
})
export class HospitalReadableService extends ReadableService<HospitalModel> implements IReadableService<HospitalModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Hospitals"
  }

  getDepartmentsByHospitalID(hospitalID: number, PageIndex:number=0,PageSize=1000,path?: string): Observable<GetListResponse<DepartmentModel>> {
    var url = `${this.baseUrl}/${hospitalID}/departments?PageIndex=${PageIndex}&PageSize=${PageSize}`

    return this._http.get<GetListResponse<DepartmentModel>>(url);
  }

}

@Injectable({
  providedIn: 'root',
})
export class HospitalWritableService extends WritableService<HospitalModel> implements IWritableService<HospitalModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Hospitals"
  }

}
