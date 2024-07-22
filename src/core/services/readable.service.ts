import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { IBaseModel } from "../models/base.model";
import { IBaseService } from "./base.service";
import { Injectable } from "@angular/core";
import { GetListResponse } from "../../app/models/get-list.response.model";

@Injectable({
  providedIn: 'root',
})
export class ReadableService<TModel extends IBaseModel> implements IReadableService<TModel> {
  baseUrl: string = `${environment.readableApiUrl}/api`;

  constructor(private http: HttpClient) { }

  get(path?: string): Observable<TModel> {
    var url = this.combinePathWithBaseUrl(path)
    return this.http.get<TModel>(url);
  }

  getByID(id: any, path?: string): Observable<TModel> {
    var url = this.combinePathWithBaseUrl(path)
    return this.http.get<TModel>(`${url}/${id}`);
  }

  getList(PageIndex:number=0,PageSize=1000,path?: string,): Observable<GetListResponse<TModel>> {
    var url = this.combinePathWithBaseUrl(path)
    return this.http.get<GetListResponse<TModel>>(`${url}?PageIndex=${PageIndex}&PageSize=${PageSize}`);
  }

  private combinePathWithBaseUrl(path?: string): string {
    if (!path) { path = '' }
    else if (!path.startsWith("/")) { path = `/${path}` }
    return `${this.baseUrl}${path}`
  }
}

export interface IReadableService<TModel extends IBaseModel> extends IBaseService {
  get(path?: string): Observable<TModel>;
  getByID(id: any, path?: string): Observable<TModel>;
  getList(PageIndex:number,PageSize:number, path?: string,): Observable<GetListResponse<TModel>>;
}
