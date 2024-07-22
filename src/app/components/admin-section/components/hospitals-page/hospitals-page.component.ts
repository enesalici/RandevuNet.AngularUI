import { Component } from '@angular/core';
import { HospitalReadableService, HospitalWritableService } from '../../../../services/hospital.service';
import { HospitalFormModel, HospitalModel } from '../../../../models/hospital.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";
import { DistrictSelectComponent } from "../../../shared/selects/district-select/district-select.component";
import { CitySelectComponent } from "../../../shared/selects/city-select/city-select.component";
import { CountrySelectComponent } from "../../../shared/selects/country-select/country-select.component";

@Component({
  selector: 'app-hospitals-page',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent, DistrictSelectComponent, CitySelectComponent, CountrySelectComponent],
  templateUrl: './hospitals-page.component.html',
  styleUrl: './hospitals-page.component.scss'
})
export class HospitalsPageComponent {
  constructor(protected readableService: HospitalReadableService, protected writableService: HospitalWritableService) { }

  formControls!: HospitalFormModel
  displayedColumns: ColumnOption[] = [{ propertName: "name", displayText: "Hastane" }];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
    }
  }

  setEditingData(data: Partial<HospitalModel>) {
    this.formControls.id.setValue(data.id)
    this.formControls.name.setValue(data.name ?? "")
  }
}
