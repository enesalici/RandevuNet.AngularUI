import { Injectable } from "@angular/core";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { HttpClient } from "@angular/common/http";
import { IWritableService, WritableService } from "../../core/services/writable.service";
import { CityModel } from "../models/city.model";
import { Observable } from "rxjs";
import { GetListResponse } from "../models/get-list.response.model";
import { DistrictModel } from "../models/district.model";

@Injectable({
  providedIn: 'root',
})
export class CityReadableService extends ReadableService<CityModel> implements IReadableService<CityModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Cities"
  }

  getDistrictsByCityID(cityID: number, PageIndex:number=0,PageSize=1000,path?: string): Observable<GetListResponse<DistrictModel>> {
    var url = `${this.baseUrl}/${cityID}/districts?PageIndex=${PageIndex}&PageSize=${PageSize}`

    return this._http.get<GetListResponse<DistrictModel>>(url);
  }

}

@Injectable({
  providedIn: 'root',
})
export class CityWritableService extends WritableService<CityModel> implements IWritableService<CityModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Cities"
  }
}
