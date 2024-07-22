import { Component } from '@angular/core';
import { DoctorScheduleSlotReadableService, DoctorScheduleSlotWritableService } from '../../../../services/doctor-schedule-slot.service';
import { DoctorScheduleSlotFormModel, DoctorScheduleSlotModel } from '../../../../models/doctor-schedule-slot.model ';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";
import { DoctorSelectComponent } from "../../../shared/selects/doctor-select/doctor-select.component";

@Component({
  selector: 'app-doctor-schedule-page',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent, DoctorSelectComponent],
  templateUrl: './doctor-schedule-page.component.html',
  styleUrl: './doctor-schedule-page.component.scss'
})
export class DoctorSchedulePageComponent {
  constructor(protected readableService: DoctorScheduleSlotReadableService, protected writableService: DoctorScheduleSlotWritableService) { }

  formControls!: DoctorScheduleSlotFormModel
  displayedColumns: ColumnOption[] = [
    { propertName: "date", displayText: "Tarih" },
    { propertName: "startTime", displayText: "Başlangıç Saati" },
    { propertName: "endTime", displayText: "Bitiş Saati" },
  ];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(''),
      date: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      doctorID: new FormControl('', Validators.required),

    }
  }

  setEditingData(data: Partial<DoctorScheduleSlotModel>) {
    this.formControls.id.setValue(data.id)
    this.formControls.date.setValue(data.date ?? "")
    this.formControls.startTime.setValue(data.startTime ?? "")
    this.formControls.endTime.setValue(data.endTime ?? "")
    this.formControls.doctorID.setValue(data.doctorID ?? "")
  }
}
