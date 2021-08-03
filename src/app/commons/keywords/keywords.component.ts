import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit {
  @Input() keywords: string[]
  constructor() { }

  ngOnInit() {
    if(!this.keywords)
      throw new Error("Attribute 'keywords' is required");
  }

  get sorted_keywords(): string[] {
    return this.keywords.sort((a, b) =>
      a.localeCompare(b)
    );
  }
}
