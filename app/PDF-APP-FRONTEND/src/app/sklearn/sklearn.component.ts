import { Component, Input, OnInit } from '@angular/core';
import { Text } from '../commons/models';

@Component({
  selector: 'app-sklearn',
  templateUrl: './sklearn.component.html',
  styleUrls: ['./sklearn.component.css']
})
export class SklearnComponent implements OnInit {
  @Input() mode: string
  @Input() parameter: {[key: string]: string}
  @Input() text: Text
  constructor() { }

  ngOnInit() {
  }

}
