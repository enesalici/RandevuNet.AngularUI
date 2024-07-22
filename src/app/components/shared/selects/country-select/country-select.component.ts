import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CountryReadableService } from '../../../../services/country.service';
import { CountryModel } from '../../../../models/country.model';


@Component({
  selector: 'app-country-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './country-select.component.html',
  styleUrl: './country-select.component.css'
})
export class CountrySelectComponent implements OnInit {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() formControlInput!: FormControl<any>
  @Input() placeholder?: string
  constructor(private service: CountryReadableService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  countryList: CountryModel[] = []
  getCountries(): void {
    this.service.getList().subscribe((res) => {
      this.countryList = res.items ?? []
    });
  }

  @Output() selectionChange = new EventEmitter<string>();
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectionChange.emit(selectedValue);
  }
}
