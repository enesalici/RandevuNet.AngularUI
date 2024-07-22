import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuarterReadableService } from '../../../../services/quarter.service';
import { DistrictReadableService } from '../../../../services/district.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { QuarterModel } from '../../../../models/quarter.model';

@Component({
  selector: 'app-quarter-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './quarter-select.component.html',
  styleUrl: './quarter-select.component.scss'
})
export class QuarterSelectComponent {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput!: FormControl<any>
  @Input() placeholder?: string
  constructor(private service: QuarterReadableService,private districtService:DistrictReadableService) {}

  ngOnInit(): void {
    this.getQuarter();
  }

  quarterList: QuarterModel[] = []
  getQuarter(): void {
    this.service.getList().subscribe((res) => {
      this.quarterList = res.items ?? []
    });
  }

  getQuartersByDistrictID(districtID:number): void {
    this.districtService.getQuarterByDistrictID(districtID).subscribe((res) => {
      this.quarterList = res.items ?? []
    });
  }



  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }
}
