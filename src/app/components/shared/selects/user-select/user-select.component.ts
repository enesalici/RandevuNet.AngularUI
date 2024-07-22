import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HospitalModel } from '../../../../models/hospital.model';
import { HospitalReadableService } from '../../../../services/hospital.service';
import { UserReadableService } from '../../../../services/user.service';
import { UserModel } from '../../../../models/user.model';

@Component({
  selector: 'app-user-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-select.component.html',
  styleUrl: './user-select.component.scss'
})
export class UserSelectComponent {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput!: FormControl<any>
  @Input() placeholder?: string

  constructor(private service: UserReadableService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  userList: UserModel[] = []
  getUsers(): void {
    this.service.getList().subscribe((res) => {
      this.userList = res.items ?? []
    });
  }

  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }
}
