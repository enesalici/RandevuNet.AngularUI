import { Component } from '@angular/core';
import { UserOperationClaimReadableService, UserOperationClaimWritableService } from '../../../../services/user-operation-claim.service';
import { UserOperationClaimFormModel, UserOperationClaimModel } from '../../../../models/user-operation-claim.model';
import { ColumnOption } from '../../../../../core/models/base.model';
import { FormControl, Validators } from '@angular/forms';
import { BaseCrudPageComponent } from "../../../../../core/components/base-crud-page/base-crud-page.component";
import { StandardInputComponent } from "../../../../../core/components/shared/widgets/inputs/standard-input/standard-input.component";
import { UserSelectComponent } from "../../../shared/selects/user-select/user-select.component";
import { OperationClaimSelectComponent } from "../../../shared/selects/operation-claim-select/operation-claim-select.component";

@Component({
  selector: 'app-user-operations-claims',
  standalone: true,
  imports: [BaseCrudPageComponent, StandardInputComponent, UserSelectComponent, OperationClaimSelectComponent],
  templateUrl: './user-operations-claims.component.html',
  styleUrl: './user-operations-claims.component.scss'
})
export class UserOperationsClaimsComponent {
  constructor(protected readableService: UserOperationClaimReadableService, protected writableService: UserOperationClaimWritableService) { }

  formControls!: UserOperationClaimFormModel
  displayedColumns: ColumnOption[] =
  [
    { propertName: "fullName", displayText: "Kullanıcı" },
    { propertName: "email", displayText: "Email" },
    { propertName: "operationClaimName", displayText: "OperationClaim" },
  ];

  ngOnInit(): void {
    this.formControls = {
      id: new FormControl(''),
      operationClaimId: new FormControl(0, Validators.required),
      userId: new FormControl('', Validators.required),
    }
  }

  setEditingData(data: Partial<UserOperationClaimModel>) {
    this.formControls.id.setValue(data.id)
    this.formControls.userId.setValue(data.userId ?? "")
    this.formControls.operationClaimId.setValue(data.operationClaimId ?? 0)
  }
}
