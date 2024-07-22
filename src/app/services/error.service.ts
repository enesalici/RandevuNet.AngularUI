import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SwalService } from "./swal.service";
import { ApiErrorResponse } from "../models/error.model";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private swal: SwalService) { }

  errorHandler(err: any) {
    let errorMessage = "Bilinmeyen Hata";
    if (err instanceof HttpErrorResponse) {
      switch (err.status) {
        case 0:
          errorMessage = "API adresine ulaşılamıyor";
          break;

        case 400:
          const res = err.error as ApiErrorResponse
          if (res.Errors) {
            let htmlContent = '<ul style="text-align: left;">';
            for (const detail of res.Errors) {
              for (const error of detail.Errors) {
                htmlContent += `<li>${error}</li>`
              }
            }
            htmlContent += '</ul>';
            errorMessage = "Girdiğiniz bilgiler eksik veya hatalı.";
          }
          else {
            errorMessage = err.error.Detail ?? "İstek Hatassı";
          }
          break;

        case 401:
          errorMessage = "Bu işlemi gerçekleştirmek için yetkiniz bulunmuyor.";
          break;

        case 403:
          errorMessage = "Yasak!";
          break;

        case 404:
          errorMessage = "API adresi bulunamadı"
          break;

        case 500:
          errorMessage = "500 Hatası";
          break;
      }
    }

    else {
      errorMessage = "Geçersiz Http Yanıtı";
    }

    this.swal.callToast(errorMessage, "error");
  }
}


