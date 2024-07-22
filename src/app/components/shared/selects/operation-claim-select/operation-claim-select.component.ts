import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserModel } from '../../../../models/user.model';
import { UserReadableService } from '../../../../services/user.service';
import { OperationClaimModelReadableService } from '../../../../services/operation-claim.service';
import { OperationClaimModel } from '../../../../models/operation-claim.model';

@Component({
  selector: 'app-operation-claim-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './operation-claim-select.component.html',
  styleUrl: './operation-claim-select.component.scss'
})
export class OperationClaimSelectComponent {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput!: FormControl<any>
  @Input() placeholder?: string

  constructor(private service: OperationClaimModelReadableService) {
  }

  ngOnInit(): void {
    this.getOperationClaims();
  }

  operationClaimList: OperationClaimModel[] = []
  getOperationClaims(): void {
    this.service.getList().subscribe((res) => {
      this.operationClaimList = res.items ?? []
    });
  }

  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }
}
