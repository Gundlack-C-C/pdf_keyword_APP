import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TextAnalytics, Text, CorpusAnalytics } from '../commons/models';
import { TransformersService } from './transformers.service';

@Component({
  selector: 'app-transformers',
  templateUrl: './transformers.component.html',
  styleUrls: ['./transformers.component.css']
})
export class TransformersComponent implements OnChanges {
  @Input() parameter: {[key: string]: string}
  @Input() text: Text
  res: TextAnalytics[] | null = null

  get Sentences(): TextAnalytics[] {
    return this.res ? this.res.filter((item, i) => i > 0) : [];
  }

  constructor(private nlp: TransformersService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['text'] || changes['parameter']) {
      this.res = null;
      let corpus = [this.text.Title, this.text.Short, this.text.Description].filter((text) => text && text != '').join('. ');
      this.nlp.getKeywords(corpus, this.parameter).then((res: CorpusAnalytics) => {
      this.res = res.res;
      })
    }
  }

}
