import { ColumnOption, IBaseFormModel, IBaseModel } from "../../core/models/base.model";
import { ReadableService } from "../../core/services/readable.service";
import { WritableService } from "../../core/services/writable.service";


export class BaseCrudComponent<
TModel extends IBaseModel,
TFormModel extends IBaseFormModel,
TReadableService extends ReadableService<TModel>,
TWritableService extends WritableService<TModel>> {

  constructor(protected readableService: TReadableService, protected writeableService: TWritableService) {  }

  displayedColumns: ColumnOption[] = []
  formControls!: TFormModel

  setEditingData(data:Partial<TModel>){}

}
