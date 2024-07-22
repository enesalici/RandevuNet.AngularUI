import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { AppConstants } from "../constants/app.constants";
import { SessionStorageService } from "../services/session-storage.service";

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor  {

  static intercept: HttpInterceptorFn = (req, next) => {
    const storage = inject(SessionStorageService);

    const token = storage.get(AppConstants.TOKEN);
    const auth = inject(AuthService);

    if (token && auth.isAuthenticated()) {
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(clonedReq);
    } else {
      return next(req);
    }
  };

}
