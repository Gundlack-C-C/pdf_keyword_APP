import { Component, Input, OnInit } from '@angular/core';
import { Text } from '../models';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() text: Text;
  TITLE: string | null;
  SHORT: string | null;
  DESCRIPTION: string | null;
  constructor() { }

  ngOnInit() {
    if(!this.text) 
      throw new Error("Attribute 'text' is required");
    
    this.TITLE = this.getField('title');
    this.SHORT = this.getField('short');
    this.DESCRIPTION = this.getField('description');
  }

  private hasKey(key: string): boolean {
    return Object.keys(this.text.text).includes(key)
  }

  getField(key: string): string | null {
    return this.hasKey(key) ? this.text.text[key] : null
  }
}
