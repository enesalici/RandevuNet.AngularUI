import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReadableService, IReadableService } from "../../core/services/readable.service";
import { WritableService, IWritableService } from "../../core/services/writable.service";
import { UserOperationClaimModel } from "../models/user-operation-claim.model";

@Injectable({
  providedIn: 'root',
})
export class UserOperationClaimReadableService extends ReadableService<UserOperationClaimModel> implements IReadableService<UserOperationClaimModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/UserOperationClaims"
  }

}

@Injectable({
  providedIn: 'root',
})
export class UserOperationClaimWritableService extends WritableService<UserOperationClaimModel> implements IWritableService<UserOperationClaimModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/UserOperationClaimModels"
  }



}
