import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IWritableService, WritableService } from "../../core/services/writable.service";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { QuarterModel } from "../models/quarter.model";

@Injectable({
  providedIn: 'root',
})
export class QuarterReadableService extends ReadableService<QuarterModel> implements IReadableService<QuarterModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Quarters"
  }

}

@Injectable({
  providedIn: 'root',
})
export class QuarterWritableService extends WritableService<QuarterModel> implements IWritableService<QuarterModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Quarters"
  }
}
