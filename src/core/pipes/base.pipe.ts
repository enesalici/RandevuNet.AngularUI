import { PipeTransform } from "@angular/core";
import { IBaseModel } from "../models/base.model";

export interface IBaseFilterPipe<TModel extends IBaseModel> extends PipeTransform {
  transform(value: TModel[], search?: string): TModel[]
}
