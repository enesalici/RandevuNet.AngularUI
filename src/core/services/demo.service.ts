import { Injectable } from "@angular/core";
import { IReadableService, ReadableService } from "./readable.service";
import { IWritableService, WritableService } from "./writable.service";
import { HttpClient } from "@angular/common/http";
import { DemoModel } from "../models/demo.model";

@Injectable({
  providedIn: 'root',
})
export class DemoReadableService extends ReadableService<DemoModel> implements IReadableService<DemoModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Hospitals"
  }

}

@Injectable({
  providedIn: 'root',
})
export class DemoWritableService extends WritableService<DemoModel> implements IWritableService<DemoModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Hospitals"
  }
}

