export interface LoginResponseModel {
  accessToken: AccessToken
  requiredAuthenticatorType: any
}

export interface AccessToken {
  token: string
  expirationDate: string
}
