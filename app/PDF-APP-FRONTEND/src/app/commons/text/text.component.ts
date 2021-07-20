import { Component, Input, OnInit } from '@angular/core';
import { Text } from '../models';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() text: Text;
  constructor() { }

  ngOnInit() {
    if(!this.text) 
      throw new Error("Attribute 'text' is required");
  }
}
