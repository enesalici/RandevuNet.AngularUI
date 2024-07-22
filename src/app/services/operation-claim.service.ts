import { Injectable } from "@angular/core";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { OperationClaimModel } from "../models/operation-claim.model";
import { HttpClient } from "@angular/common/http";
import { GetListResponse } from "../models/get-list.response.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class OperationClaimModelReadableService extends ReadableService<OperationClaimModel> implements IReadableService<OperationClaimModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/OperationClaims"
  }
}
