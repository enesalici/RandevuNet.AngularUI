import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-input',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: ``
})
export class BaseInputComponent {
  @Input() id?: string;
  @Input() label?: string;
  @Input() isRequired?: boolean = false;
  @Input() placeholder?: string
  @Input() inputType?:string

  @Output() keyup = new EventEmitter<KeyboardEvent>()

  keyupEmit(event:KeyboardEvent):void {
    this.keyup.emit(event);
  }
}
