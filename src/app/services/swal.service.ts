import { Injectable } from "@angular/core";
import Swal, { SweetAlertOptions } from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  call(options: SweetAlertOptions) {
    Swal.fire(options)
  }

  callToast(title: string, icon: SweetAlertIcon = "success", html?: string, timer?: number) {
    Swal.fire({
      title: title,
      text: "",
      html: html,
      timer: timer ?? 3000,
      showConfirmButton: false,
      toast: true,
      position: "top-right",
      icon: icon,
      timerProgressBar: true
    });
  }

  callSwal(title: string, text: string, callBack: () => void, confirmButtonText: string = "Sil", icon: SweetAlertIcon = "question") {
    Swal.fire({
      title: title,
      text: text,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: "Vazgeç",
      icon: icon
    }).then(res => {
      if (res.isConfirmed) {
        callBack();
      }
    })
  }

  callSwalDelete(title: string, text: string, callBack: () => void, confirmButtonText: string = "Sil", icon: SweetAlertIcon = "error") {
    Swal.fire({
      title: title,
      text: text,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: "Vazgeç",
      confirmButtonColor:"#ff0000",
      icon: icon
    }).then(res => {
      if (res.isConfirmed) {
        callBack();
      }
    })
  }
}


export type SweetAlertIcon = 'success' | 'error' | 'warning' | 'info' | 'question'
