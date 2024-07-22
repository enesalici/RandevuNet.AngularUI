import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'app-create-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-button.component.html',
  styleUrl: './create-button.component.scss'
})
export class CreateButtonComponent extends BaseButtonComponent {

}
