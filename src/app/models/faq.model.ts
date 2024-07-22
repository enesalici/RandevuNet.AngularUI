import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface FaqModel extends BaseModel<number> {
  question: string | null;
  answer: string | null;
}

export interface FaqFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  question: FormControl<string | null>;
  answer: FormControl<string | null>;
}

