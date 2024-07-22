import { BaseModel } from "../../core/models/base.model";


export class UserModel extends BaseModel<string> {
  firstName: string = ""
  lastName: string = ""
  email: string= ""
  status: boolean = true
  userRoleID: number =  -1
  userRoleName: string =  ""
}

