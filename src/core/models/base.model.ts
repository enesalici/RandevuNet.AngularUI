import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormControl, FormGroup, ValidatorFn } from "@angular/forms";

export class BaseModel<T> implements IBaseModel {
  [key: string]: any; // index signature
  id: T | null = null
}

export interface IBaseModel {
  [key: string]: any; // index signature
  id: any | null
}

export interface IBaseFormModel {
  [key: string]: AbstractControl<any, any>;
}

export class BaseFormGroup<TControl extends IBaseFormModel> extends FormGroup<TControl> {
  constructor(controls: TControl,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(controls,validatorOrOpts,asyncValidator);
  }
}


export interface ColumnOption {
  propertName: string;
  displayText: string;
}
