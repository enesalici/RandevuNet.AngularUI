import { FormControl } from "@angular/forms";
import { BaseModel, IBaseFormModel } from "../../core/models/base.model";

export interface FeedbackModel extends BaseModel<number> {
  title: string | null;
  message: string | null;
  userID: string | null;
}

export interface FeedbackFormModel extends IBaseFormModel {
  id: FormControl<any | null>
  title: FormControl<string | null>;
  message: FormControl<string | null>;
  userID: FormControl<string | null >;
}

