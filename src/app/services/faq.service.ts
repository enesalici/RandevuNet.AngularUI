import { Injectable } from "@angular/core";
import { FaqModel } from "../models/faq.model";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { HttpClient } from "@angular/common/http";
import { IWritableService, WritableService } from "../../core/services/writable.service";

@Injectable({
  providedIn: 'root',
})
export class FaqReadableService extends ReadableService<FaqModel> implements IReadableService<FaqModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Faqs"
  }

}

@Injectable({
  providedIn: 'root',
})
export class FaqWritableService extends WritableService<FaqModel> implements IWritableService<FaqModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Faqs"
  }

}
