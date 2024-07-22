import { HttpInterceptorFn } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SpinnerInterceptor {

  static intercept: HttpInterceptorFn = (req, next) => {
    const spinner = inject(NgxSpinnerService);

    if (req.method === 'POST' ||
      req.method === 'PUT' ||
      req.method === 'DELETE') {
      spinner.show();
    }

    return next(req).pipe(
     finalize( () => spinner.hide())
    );
  };

}
