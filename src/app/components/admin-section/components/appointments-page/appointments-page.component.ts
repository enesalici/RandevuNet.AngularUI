import { Component } from '@angular/core';
import { AppointmentReadableService, AppointmentWritableService } from '../../../../services/appointment.service';
import { AppointmentFormModel, AppointmentModel } from '../../../../models/appointment.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";

@Component({
  selector: 'app-appointments-page',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent],
  templateUrl: './appointments-page.component.html',
  styleUrl: './appointments-page.component.scss'
})
export class AppointmentsPageComponent {
  constructor(protected readableService: AppointmentReadableService, protected writableService: AppointmentWritableService) { }

  formControls!: AppointmentFormModel
  displayedColumns: ColumnOption[] = [
    { propertName: "patientFirstName", displayText: "İsim" },
    { propertName: "patientLastName", displayText: "Soyisim" },
    { propertName: "doctorFirstName", displayText: "Doktor Adı" },
    { propertName: "doctorLastName", displayText: "Doktor Soyadı" },
    { propertName: "date", displayText: "Tarih" },
    { propertName: "startTime", displayText: "Randevu Saati" },
    { propertName: "endTime", displayText: "Randevu Bitiş Saati" }

  ];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(''),
      patientId: new FormControl('', Validators.required),
      doctorScheduleSlotId: new FormControl(0, Validators.required),
    }
  }

  setEditingData(data: Partial<AppointmentModel>) {
    this.formControls.id.setValue(data.id)
    this.formControls.patientId.setValue(data.patientId ?? "")
    this.formControls.doctorScheduleSlotId.setValue(data.doctorScheduleSlotId ?? 0)
  }
}
