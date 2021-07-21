import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-algo-input-select',
  templateUrl: './algo-input-select.component.html',
  styleUrls: ['./algo-input-select.component.css']
})
export class AlgoInputSelectComponent implements OnInit {
  @Input() mode: string;
  @Output() ModeChanged = new EventEmitter<String | null>()
  @Output() ParameterChanged = new EventEmitter<any | null>()

  static options: {[key: string]: string[]} = {
    'sklearn_count': ['SKLEARN - COUNT', 'Sklearn Count Vectorization'],
    'sklearn_tfidf': ['SKLEARN - TFIDF', 'Sklearn Inverse Term Frequency Vectorization'],
    'transformers_bert': ['TRANSFORMERS - BERT', 'Word Embedding with BERT Model'],
    'transformers_distillbert': ['FRANSFORMERS - DistilBERT', 'Word Embedding with distilled BERT Model'],
  }

  get options(): {[key: string]: string[]} {
    return AlgoInputSelectComponent.options;
  }

  set MODE(val: string | null) {
    if(val && Object.keys(this.options).includes(val)) {
      this.mode = val
    } else {
      console.warn(`Unknown algo type: ${val}! Redirecting to [${this.options}]`)
    }
  }

  constructor() { }

  ngOnInit() {
    if(!this.mode) {
      this.mode = Object.keys(this.options)[0]
    }else if(Object.keys(this.options).includes(this.mode)) {
      console.warn(`Unknown algo type: ${this.mode}!`);
    }
  }

}
