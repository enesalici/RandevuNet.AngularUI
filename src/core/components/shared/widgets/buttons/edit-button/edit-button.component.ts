import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'app-edit-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.scss'
})
export class EditButtonComponent extends BaseButtonComponent {

}
