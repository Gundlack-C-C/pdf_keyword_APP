import { Component, Input, OnInit } from '@angular/core';
import { KeywordAnalytics } from '../models';

@Component({
  selector: 'app-keywords-bar',
  templateUrl: './keywords-bar.component.html',
  styleUrls: ['./keywords-bar.component.css']
})
export class KeywordsBarComponent implements OnInit {
  @Input() keywords: KeywordAnalytics[]
  constructor() { }

  ngOnInit() {
  }

}
