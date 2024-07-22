import { Component } from '@angular/core';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { ColumnOption } from '../../../../../core/models/base.model';
import { CountryFormModel, CountryModel } from '../../../../models/country.model';
import { FormControl, Validators } from '@angular/forms';
import { CountryReadableService, CountryWritableService } from '../../../../services/country.service';
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";

@Component({
  selector: 'app-countries-page',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent],
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.scss',
})
export class CountriesPageComponent {
  constructor(protected readableService: CountryReadableService, protected writableService: CountryWritableService) { }

  formControls!: CountryFormModel
  displayedColumns: ColumnOption[] = [{ propertName: "name", displayText: "Ülke" }];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
    }
  }

  setEditingData(data: Partial<CountryModel>) {
    this.formControls.id.setValue(data.id)
    this.formControls.name.setValue(data.name ?? "")
  }
}
