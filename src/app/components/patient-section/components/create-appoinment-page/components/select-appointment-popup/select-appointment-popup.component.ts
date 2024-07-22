import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Dictionary, groupBy } from 'lodash';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';

import { AppointmentReadableService, AppointmentWritableService } from '../../../../../../services/appointment.service';
import { AvailableDoctorResponseModel } from '../../../../../../models/appointment-search.model';
import { DoctorScheduleSlotResponseModel } from '../../../../../../models/doctor-schedule-slot.model ';



@Component({
  selector: 'app-select-appointment-popup',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  templateUrl: './select-appointment-popup.component.html',
  styleUrl: './select-appointment-popup.component.scss'
})
export class SelectAppointmentPopupComponent implements OnInit {



  @Output() confirm = new EventEmitter<boolean>();
  onNoClick() {
    this.confirm.emit(false)
  }

  availableAppoinments!: Dictionary<DoctorScheduleSlotResponseModel[]>
  availableDates: string[] = []
  selectedTime?: number

  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalData,private appointmentService:AppointmentWritableService) { }

  ngOnInit(): void {
    this.availableAppoinments = groupBy(this.data.doctorSchedule, 'date')

    for (let key in this.availableAppoinments) {
      if (this.availableAppoinments.hasOwnProperty(key)) {
        this.availableDates.push(key)
      }
    }

  }

  timeSelected(selectedID: number) {
    if (selectedID == this.selectedTime) {
      this.selectedTime = undefined
    }
    else this.selectedTime = selectedID
    console.log(this.selectedTime);

  }

  createAppointmentClicked() {
    this.appointmentService.add({

      patientId: this.data.patientId,
      doctorScheduleSlotId: this.selectedTime,
    }).subscribe(res=>{
    this.confirm.emit(true)

    })

    }



}

export class ModalData {
  doctor?: AvailableDoctorResponseModel;
  doctorSchedule: DoctorScheduleSlotResponseModel[] = [];
  patientId!: string;
}
