import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-algo-input-select',
  templateUrl: './algo-input-select.component.html',
  styleUrls: ['./algo-input-select.component.css']
})
export class AlgoInputSelectComponent implements OnInit {
  @Input() target: string;
  @Output() TargetChanged = new EventEmitter<String | null>()
  @Output() ParameterChanged = new EventEmitter<any | null>()

  static options: {[key: string]: string[]} = {
    'sklearn_count': ['SKLEARN - COUNT', 'Sklearn Count Vectorization', 'sklearn', 'count'],
    'sklearn_tfidf': ['SKLEARN - TFIDF', 'Sklearn Inverse Term Frequency Vectorization', 'sklearn', 'tfidf'],
    'transformers_bert': ['TRANSFORMERS - BERT', 'Word Embedding with BERT Model', 'transformers', 'bert'],
    'transformers_distillbert': ['FRANSFORMERS - DistilBERT', 'Word Embedding with distilled BERT Model', 'transformers', 'distillbert'],
  }

  get options(): {[key: string]: string[]} {
    return AlgoInputSelectComponent.options;
  }

  set TARGET(val: string | null) {
    if(val && Object.keys(this.options).includes(val)) {
      this.target = val
      this.TargetChanged.emit(val)
    } else {
      console.warn(`Unknown algo type: ${val}! Redirecting to [${this.options}]`)
    }
  }

  constructor() { }

  ngOnInit() {
    if(!this.target) {
      this.target = Object.keys(this.options)[0]
    }else if(Object.keys(this.options).includes(this.target)) {
      console.warn(`Unknown algo type: ${this.target}!`);
    }
  }

  onParameterChanged(val: any) {
    this.ParameterChanged.emit(val)
  }
}
