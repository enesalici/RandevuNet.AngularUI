import { Injectable } from "@angular/core";
import { DepartmentModel } from "../models/department.model";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { GetListResponse } from "../models/get-list.response.model";
import { HttpClient } from "@angular/common/http";
import { IWritableService, WritableService } from "../../core/services/writable.service";
import { Observable } from "rxjs";
import { DoctorModel } from "../models/doctor.model";
import { AvailableDoctorRequestModel, AvailableDoctorResponseModel } from "../models/appointment-search.model";

@Injectable({
  providedIn: 'root',
})
export class DepartmentReadableService extends ReadableService<DepartmentModel> implements IReadableService<DepartmentModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Departments"
  }

  getDoctorsByDepartmentID(departmentID: number, PageIndex:number=0,PageSize=1000,path?: string): Observable<GetListResponse<DoctorModel>> {
    var url = `${this.baseUrl}/${departmentID}/doctors?PageIndex=${PageIndex}&PageSize=${PageSize}`

    return this._http.get<GetListResponse<DoctorModel>>(url);
  }

  getAvailableDoctors(req:AvailableDoctorRequestModel):Observable<AvailableDoctorResponseModel[]>{
    let url = `${this.baseUrl}/${req.departmentID}/available-doctors`;

    if (req.doctorID) {
      url += `?doctorID=${req.doctorID}`;
    }

    if (req.date) {
      url += `${req.doctorID ? '&' : '?'}date=${req.date}`;
    }

    return this._http.get<AvailableDoctorResponseModel[]>(url)
  }

}

@Injectable({
  providedIn: 'root',
})
export class DepartmentsWritableService extends WritableService<DepartmentModel> implements IWritableService<DepartmentModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Departments"
  }



}
