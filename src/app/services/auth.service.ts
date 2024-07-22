import { Injectable } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { LoginResponseModel } from "../models/login.response.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IBaseService } from "../../core/services/base.service";
import { environment } from "../../environments/environment.development";
import { ErrorService } from "./error.service";
import { NgxSpinnerService } from "ngx-spinner";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Router } from "@angular/router";
import { TokenModel } from "../models/token.model";
import { SessionStorageService } from "./session-storage.service";
import { AppConstants } from "../constants/app.constants";
import { RegisterDoctorModel, RegisterModel } from "../models/register.model";
import { RegisterResponseModel } from "../models/register.response.model";
import { UserModel } from "../models/user.model";
import { UserReadableService } from "./user.service";

@Injectable({
  providedIn: 'root',
})

export class AuthService implements IBaseService {
  baseUrl: string = `${environment.readableApiUrl}/api`;

  constructor(private http: HttpClient, private storage: SessionStorageService, private router: Router, private user: UserReadableService) {
    // this.baseUrl += "/Auth"
  }

  login(data: LoginModel, callBack: (res: LoginResponseModel) => void, errorCallBack?: () => void): void {
    this.http.post<LoginResponseModel>(`${this.baseUrl}/Auth/login`, data).subscribe({
      next: (res) => {
        if (res) {
          this.storage.set(AppConstants.TOKEN, res.accessToken.token);

          if (res.accessToken.token) {
            const decode: JwtPayload | any = jwtDecode(res.accessToken.token);
            const exp = decode.exp;
            const now = new Date().getTime() / 1000;

            if (now > exp) {
              this.storage.remove(AppConstants.TOKEN);
            }

            this.tokenDecode.id = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
            this.tokenDecode.email = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
            this.tokenDecode.roles = decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
          }

          this.user.getByID(this.tokenDecode.id).subscribe((res) => {
            this.storage.set(AppConstants.USER, res)

            switch (res.userRoleID) {
              case 1:
                this.router.navigateByUrl("/admin");

                break;
              case 2:
                this.router.navigateByUrl("/doctor");

                break;
              case 3:
                this.router.navigateByUrl("/patient");

                break;

            }

          })

          callBack(res);
        }
      },
      error: (e) => { if (errorCallBack) { errorCallBack(); } },
    });
  }

  register(data: RegisterModel): Observable<RegisterResponseModel> {
    data.userRoleID = 3;
    return this.http.post<RegisterResponseModel>(`${this.baseUrl}/patients`, data)
  }
  registerDoctor(data: RegisterDoctorModel): Observable<RegisterResponseModel> {
    data.userRoleID = 2
    return this.http.post<RegisterResponseModel>(`${this.baseUrl}/doctors`, data)
  }




  tokenDecode: TokenModel = new TokenModel();
  isAuthenticated(requiredRoles?: string[]) {
    const token: string | null = this.storage.get(AppConstants.TOKEN);

    if (token) {
      const decode: JwtPayload | any = jwtDecode(token);
      const exp = decode.exp;
      const now = new Date().getTime() / 1000;

      if (now > exp) {
        this.storage.remove(AppConstants.TOKEN);
        return false;
      }

      this.tokenDecode.id = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      this.tokenDecode.email = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
      this.tokenDecode.roles = decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];


      // if (requiredRoles) {
      //   const userRoles = this.tokenDecode.roles;

      //   if (!requiredRoles.some(role => userRoles.includes(role))) {
      //     return false;
      //   }
      // }
      if (requiredRoles) {
         const userData: UserModel | null = this.storage.get(AppConstants.USER);

         const userRole = userData?.userRoleName
         console.log(userRole);


        if (!requiredRoles.some(x => x.toLowerCase() == userRole?.toLowerCase())) {
          return false;
        }
      }
      return true;
    }

    return false;
  }


  logout() {
    this.storage.remove(AppConstants.TOKEN);
    this.router.navigateByUrl('/auth/login');
  }
}
