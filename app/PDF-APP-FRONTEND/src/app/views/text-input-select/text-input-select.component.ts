import { ClassMethod } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-input-select',
  templateUrl: './text-input-select.component.html',
  styleUrls: ['./text-input-select.component.css']
})
export class TextInputSelectComponent implements OnInit {
  static options: {[key: string]: string[]} = {
    'wiki': ['Wiki', 'Random Wikipedia'],
    'pdf': ['PDF', 'PDF Upload'],
    'manual': ['Manual', 'Manual Input']
  };
  static option_default = 'manual'
  @Input() mode: string;
  @Output() onModeChanged = new EventEmitter<String | null>()

  get options(): {[key: string]: string[]} {
    return TextInputSelectComponent.options;
  }

  ngOnInit() {
    if(!this.mode || Object.keys(TextInputSelectComponent.options).includes(this.mode))
      console.warn(`Unkwon input type: ${this.mode}!`);
  }

  set MODE(val: string | null) {
    if(val && Object.keys(TextInputSelectComponent.options).includes(val)){
      this.mode = val;
      this.onModeChanged.emit(val);
    } else {
      console.warn(`Unkwon input type: ${val}!`)
    }
  }
}
