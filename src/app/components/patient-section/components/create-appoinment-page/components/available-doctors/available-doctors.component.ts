import { Component, Input } from '@angular/core';
import { AvailableDoctorResponseModel } from '../../../../../../models/appointment-search.model';
import { MessageBoxComponent } from "../../../../../shared/info/message-box/message-box.component";
import { DoctorReadableService } from '../../../../../../services/doctor.service';
import { DoctorScheduleSlotResponseModel } from '../../../../../../models/doctor-schedule-slot.model ';
import { MatDialog } from '@angular/material/dialog';
import { SelectAppointmentPopupComponent } from '../select-appointment-popup/select-appointment-popup.component';
import { AuthService } from '../../../../../../services/auth.service';
import { SwalService } from '../../../../../../services/swal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-doctors',
  standalone: true,
  imports: [MessageBoxComponent],
  templateUrl: './available-doctors.component.html',
  styleUrl: './available-doctors.component.scss'
})
export class AvailableDoctorsComponent {
   @Input({required:true}) list: AvailableDoctorResponseModel[] = [];
  selectedDoctor?: AvailableDoctorResponseModel


   slots:DoctorScheduleSlotResponseModel[] = []


   constructor(private doctorService:DoctorReadableService,public popup: MatDialog, private auth:AuthService,private swal:SwalService,private router:Router){}

   chooseAppointment(doctor: AvailableDoctorResponseModel) {
    this.selectedDoctor = doctor;

    this.getScheduleSlotsByDoctorID(this.selectedDoctor.id ?? "");
  }



  getScheduleSlotsByDoctorID(doctorID: string) {
    this.doctorService.getScheduleSlotsByDoctorID(doctorID).subscribe((res: DoctorScheduleSlotResponseModel[]) => {
      this.slots = res;
       this.showPopup()
    });
  }

  showPopup() {
    const popupRef = this.popup.open(SelectAppointmentPopupComponent, {

      data: { doctor: this.selectedDoctor, doctorSchedule: this.slots, patientId:this.auth.tokenDecode.id}
    });

    popupRef.componentInstance.confirm.subscribe((res) => {
      if (res) {
        this.swal.callToast("Randevu Oluşturuldu")
      }
      this.popup.closeAll()
    })


  }

}
