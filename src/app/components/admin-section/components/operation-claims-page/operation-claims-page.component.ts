import { Component } from '@angular/core';
import { OperationClaimModelReadableService } from '../../../../services/operation-claim.service';
import { OperationClaimFormModel } from '../../../../models/operation-claim.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";

@Component({
  selector: 'app-operation-claims-page',
  standalone: true,
  imports: [BaseCrudPageComponent],
  templateUrl: './operation-claims-page.component.html',
  styleUrl: './operation-claims-page.component.scss'
})
export class OperationClaimsPageComponent {
  constructor(protected readableService:OperationClaimModelReadableService) { }
  displayedColumns: ColumnOption[] =
  [
    { propertName: "id", displayText: "OperationClaimID" },
    { propertName: "name", displayText: "OperationClaim" }
  ];

  ngOnInit(): void {
  }


}
