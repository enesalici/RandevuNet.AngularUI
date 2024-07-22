import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { IBaseModel } from "../models/base.model";
import { IBaseService } from "./base.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class WritableService<TModel extends IBaseModel> implements IWritableService<TModel> {
  baseUrl: string = `${environment.writableApiUrl}/api`;

  constructor(private http: HttpClient) { }

  add(model: Partial<TModel>, path?: string): Observable<void> {
    var url = this.combinePathWithBaseUrl(path)
    return this.http.post<void>(url, model);
  }

  update(model: Partial<TModel>, path?: string): Observable<void> {
    var url = this.combinePathWithBaseUrl(path)
    return this.http.put<void>(url, model);
  }

  delete(id: any, path?: string): Observable<void> {
    var url = this.combinePathWithBaseUrl(path)
    return this.http.delete<void>(`${url}/${id}`);
  }

  private combinePathWithBaseUrl(path?: string): string {
    if (!path) { path = '' }
    else if (!path.startsWith("/")) { path = `/${path}` }
    return `${this.baseUrl}${path}`
  }
}

export interface IWritableService<TModel extends IBaseModel> extends IBaseService {
  add(model: Partial<TModel>, path?: string): Observable<void>;
  update(model: Partial<TModel>, path?: string): Observable<void>;
  delete(id: any, path?: string): Observable<void>;
}
