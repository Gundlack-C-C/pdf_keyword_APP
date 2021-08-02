import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CorpusAnalytics, Text} from '../commons/models';
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
  res: CorpusAnalytics | null = null
  constructor(private nlp: SklearnService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['mode'] || changes['text'] || changes['parameter']) {
      this.res = null;
      let corpus = [this.text.Title, this.text.Short, this.text.Description].join('. ');
      this.nlp.getKeywords(this.mode, corpus, this.parameter).then((res: CorpusAnalytics) => {
        this.res = res;
      })
    }
  }
}
