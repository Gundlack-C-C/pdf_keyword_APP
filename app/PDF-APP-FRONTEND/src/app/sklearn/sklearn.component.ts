import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CorpusAnalytics, Text, TextAnalytics} from '../commons/models';
import { SklearnService } from './sklearn.service';
@Component({
  selector: 'app-sklearn',
  templateUrl: './sklearn.component.html',
  styleUrls: ['./sklearn.component.css']
})
export class SklearnComponent implements OnChanges {
  @Input() mode: string
  @Input() parameter: {[key: string]: string}
  @Input() text: Text
  res: TextAnalytics[] | null = null
  constructor(private nlp: SklearnService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['mode'] || changes['text'] || changes['parameter']) {
      this.res = null;
      let corpus = [this.text.Title, this.text.Short, this.text.Description].filter((text) => text && text != '').join('. ');
      this.nlp.getKeywords(this.mode, corpus, this.parameter).then((res: CorpusAnalytics) => {
      this.res = res.res;
      })
    }
  }
}
