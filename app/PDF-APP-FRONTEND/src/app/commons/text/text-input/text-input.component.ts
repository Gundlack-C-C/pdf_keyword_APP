import { Component, EventEmitter, Output } from '@angular/core';
import { Text } from '../../models'

let T = null
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  text: Text | null = null
  T: any = null
  @Output() newTextEvent = new EventEmitter<Text | null>();

  set TEXT(val: Text | null) {
    this.text = val
    this.newTextEvent.emit(val)
  }

  onTextSubmit($event: any) {
    clearTimeout(this.T)
    this.T = window.setTimeout(() => {
      const val = $event.target.value;
      this.TEXT = val;
    }, 1000)
  }
}
