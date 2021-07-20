import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-analyse',
  templateUrl: './text-analyse.component.html',
  styleUrls: ['./text-analyse.component.css']
})
export class TextAnalyseComponent implements OnInit {
  @Input() text: Text
  constructor() { }

  ngOnInit() {
    if(!this.text) 
      throw new Error("Attribute 'text' is required");
  }

}
