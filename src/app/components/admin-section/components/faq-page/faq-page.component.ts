import { Component } from '@angular/core';
import { FaqReadableService, FaqWritableService } from '../../../../services/faq.service';
import { FaqFormModel, FaqModel } from '../../../../models/faq.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {
  constructor(protected readableService: FaqReadableService, protected writableService: FaqWritableService) { }

  formControls!: FaqFormModel
  displayedColumns: ColumnOption[] = [
    { propertName: "question", displayText: "Soru" },
    { propertName: "answer", displayText: "Cevap" }
  ];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(),
      question: new FormControl('', Validators.required),
      answer: new FormControl('', Validators.required),
    }
  }

  setEditingData(data: Partial<FaqModel>) {
    this.formControls.id.setValue(data.id)
    this.formControls.question.setValue(data.question ?? "")
    this.formControls.answer.setValue(data.answer ?? "")
  }
}
