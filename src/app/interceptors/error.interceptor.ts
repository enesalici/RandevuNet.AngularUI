import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { SwalService } from "../services/swal.service";
import { ErrorService } from "../services/error.service";

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor {

  static intercept: HttpInterceptorFn = (req, next) => {
    const error = inject(ErrorService);

    return next(req).pipe(
      catchError((err) => {
        error.errorHandler(err);
        return throwError(() => err)
      }

      )
    );
  };

}
