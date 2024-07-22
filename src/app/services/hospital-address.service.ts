import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReadableService, IReadableService } from "../../core/services/readable.service";
import { WritableService, IWritableService } from "../../core/services/writable.service";
import { HospitalAddressModel } from "../models/hospital-addresses.model";


@Injectable({
  providedIn: 'root',
})
export class HospitalAddressReadableService extends ReadableService<HospitalAddressModel> implements IReadableService<HospitalAddressModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/HospitalAddresses"
  }

}

@Injectable({
  providedIn: 'root',
})
export class HospitalAddressWritableService extends WritableService<HospitalAddressModel> implements IWritableService<HospitalAddressModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/HospitalAddresses"
  }



}
