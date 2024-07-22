import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'app-cancel-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cancel-button.component.html',
  styleUrl: './cancel-button.component.scss'
})
export class CancelButtonComponent extends BaseButtonComponent {

}
