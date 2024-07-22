import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { IReadableService, ReadableService } from "../../core/services/readable.service";
import { IWritableService, WritableService } from "../../core/services/writable.service";

@Injectable({
  providedIn: 'root',
})
export class UserReadableService extends ReadableService<UserModel> implements IReadableService<UserModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Users"
  }


}

@Injectable({
  providedIn: 'root',
})
export class UserWritableService extends WritableService<UserModel> implements IWritableService<UserModel> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.baseUrl += "/Users"
  }

}
