import { Component } from '@angular/core';
import { DepartmentReadableService, DepartmentsWritableService } from '../../../../services/department.service';
import { DepartmentFormModel, DepartmentModel } from '../../../../models/department.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";

@Component({
  selector: 'app-departments-page',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent],
  templateUrl: './departments-page.component.html',
  styleUrl: './departments-page.component.scss'
})
export class DepartmentsPageComponent {
  constructor(protected readableService: DepartmentReadableService, protected writableService: DepartmentsWritableService) { }

  formControls!: DepartmentFormModel
  displayedColumns: ColumnOption[] =
  [
    { propertName: "name", displayText: "Departman" },
  ];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(''),
      name: new FormControl('', Validators.required),

    }
  }

  setEditingData(data: Partial<DepartmentModel>) {
    this.formControls.id.setValue(data.id)
    this.formControls.name.setValue(data.name ?? '')
  }
}
