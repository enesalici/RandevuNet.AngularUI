import { Injectable } from "@angular/core";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { HttpClient } from "@angular/common/http";
import { IWritableService, WritableService } from "../../core/services/writable.service";
import { CountryModel } from "../models/country.model";
import { Observable } from "rxjs";
import { CityModel } from "../models/city.model";
import { GetListResponse } from "../models/get-list.response.model";

@Injectable({
  providedIn: 'root',
})
export class CountryReadableService extends ReadableService<CountryModel> implements IReadableService<CountryModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Countries"
  }

  getCitiesByCountryID(countryID: number, PageIndex:number=0,PageSize=1000,path?: string): Observable<GetListResponse<CityModel>> {
    var url = `${this.baseUrl}/${countryID}/cities?PageIndex=${PageIndex}&PageSize=${PageSize}`

    return this._http.get<GetListResponse<CityModel>>(url);
  }

}

@Injectable({
  providedIn: 'root',
})
export class CountryWritableService extends WritableService<CountryModel> implements IWritableService<CountryModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Countries"
  }

}
