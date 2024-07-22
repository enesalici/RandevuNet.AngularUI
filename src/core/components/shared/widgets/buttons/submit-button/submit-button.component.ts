import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.scss'
})
export class SubmitButtonComponent extends BaseButtonComponent {
  @Input() isFormInvalid?: boolean;

}
