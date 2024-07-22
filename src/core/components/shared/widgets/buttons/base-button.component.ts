import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: ``
})
export class BaseButtonComponent {
  @Input() value?:string;
  @Input() color?:string;
}
