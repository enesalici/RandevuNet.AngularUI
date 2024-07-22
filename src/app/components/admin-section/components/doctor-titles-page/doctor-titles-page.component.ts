import { Component } from '@angular/core';
import { DoctorTitleReadableService, DoctorTitleWritableService } from '../../../../services/doctor-title.service';
import { DoctorTitleFormModel, DoctorTitleModel } from '../../../../models/doctor-title.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";

@Component({
  selector: 'app-doctor-titles-page',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent],
  templateUrl: './doctor-titles-page.component.html',
  styleUrl: './doctor-titles-page.component.scss'
})
export class DoctorTitlesPageComponent {
  constructor(protected readableService: DoctorTitleReadableService, protected writableService: DoctorTitleWritableService) { }

  formControls!:DoctorTitleFormModel
  displayedColumns: ColumnOption[] = [
    { propertName: "name", displayText: "Doktor Ünvanı" },
    { propertName: "levelIndex", displayText: "Ünvan Seviyesi" }
  ];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      levelIndex: new FormControl(0, Validators.required),
    }
  }

  setEditingData(data: Partial<DoctorTitleModel>) {
    this.formControls.id.setValue(data.id)
    this.formControls.name.setValue(data.name ?? "")
    this.formControls.levelIndex.setValue(data.levelIndex ?? 0)
  }
}
