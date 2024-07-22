import { Component, Input } from "@angular/core";
import { BaseInputComponent } from "../base-input.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-standard-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './standard-input.component.html',
  styleUrl: './standard-input.component.scss'
})
export class StandardInputComponent extends BaseInputComponent {
  @Input() formControlInput?: FormControl<any>

}
