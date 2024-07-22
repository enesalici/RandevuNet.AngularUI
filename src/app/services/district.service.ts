import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReadableService, IReadableService } from "../../core/services/readable.service";
import { WritableService, IWritableService } from "../../core/services/writable.service";
import { DistrictModel } from "../models/district.model";
import { GetListResponse } from "../models/get-list.response.model";
import { Observable } from "rxjs";
import { QuarterModel } from "../models/quarter.model";

@Injectable({
  providedIn: 'root',
})
export class DistrictReadableService extends ReadableService<DistrictModel> implements IReadableService<DistrictModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Districts"
  }

  getQuarterByDistrictID(districtID: number, PageIndex:number=0,PageSize=1000,path?: string): Observable<GetListResponse<QuarterModel>> {
    var url = `${this.baseUrl}/${districtID}/departments?PageIndex=${PageIndex}&PageSize=${PageSize}`

    return this._http.get<GetListResponse<QuarterModel>>(url);
  }
}

@Injectable({
  providedIn: 'root',
})
export class DistrictWritableService extends WritableService<DistrictModel> implements IWritableService<DistrictModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Districts"
  }
}
