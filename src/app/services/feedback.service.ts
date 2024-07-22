import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { FeedbackModel } from "../models/feedback.model";
import { IWritableService, WritableService } from "../../core/services/writable.service";

@Injectable({
  providedIn: 'root',
})
export class FeedbackReadableService extends ReadableService<FeedbackModel> implements IReadableService<FeedbackModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Feedbacks"
  }

}

@Injectable({
  providedIn: 'root',
})
export class FeedbackWritableService extends WritableService<FeedbackModel> implements IWritableService<FeedbackModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Feedbacks"
  }

}
