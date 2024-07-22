import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent extends BaseButtonComponent {

}
