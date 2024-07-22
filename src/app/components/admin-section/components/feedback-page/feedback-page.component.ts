import { Component } from '@angular/core';
import { FeedbackReadableService, FeedbackWritableService } from '../../../../services/feedback.service';
import { FeedbackFormModel, FeedbackModel } from '../../../../models/feedback.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";

@Component({
  selector: 'app-feedback-page',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent],
  templateUrl: './feedback-page.component.html',
  styleUrl: './feedback-page.component.scss'
})
export class FeedbackPageComponent {
  constructor(protected readableService: FeedbackReadableService, protected writableService: FeedbackWritableService) { }

  formControls!: FeedbackFormModel
  displayedColumns: ColumnOption[] = [
    { propertName: "userID", displayText: "Mesaj Sahibi" },
    { propertName: "title", displayText: "Konu" },
    { propertName: "message", displayText: "Mesaj" }
  ];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(),
      title: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      userID: new FormControl('', Validators.required),
    }
  }

  setEditingData(data: Partial<FeedbackModel>) {
    this.formControls.id.setValue(data.id)
    this.formControls.title.setValue(data.title ?? "")
    this.formControls.message.setValue(data.message ?? "")
    this.formControls.userID.setValue(data.userID ?? "")
  }
}
