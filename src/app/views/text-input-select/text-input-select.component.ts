import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Text } from 'src/app/commons/models';

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
  @Output() ModeChanged = new EventEmitter<String | null>()
  @Output() TextChanged = new EventEmitter<Text | null>()

  get options(): {[key: string]: string[]} {
    return TextInputSelectComponent.options;
  }

  ngOnInit() {
    if(!this.mode) {
      this.mode = Object.keys(this.options)[0]
    }else if(Object.keys(this.options).includes(this.mode)) {
      console.warn(`Unknown input type: ${this.mode}!`);
    }
  }

  set MODE(val: string | null) {
    if(val && Object.keys(this.options).includes(val)){
      this.mode = val;
      this.ModeChanged.emit(val);
    } else {
      console.warn(`Unknown input type: ${val}!`)
    }
  }

  onTextChanged(val: any) {
    this.TextChanged.emit(val)
  }
}
