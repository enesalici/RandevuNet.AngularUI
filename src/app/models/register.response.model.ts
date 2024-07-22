import { BaseModel } from "../../core/models/base.model"

export interface RegisterResponseModel extends BaseModel<string> {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}
