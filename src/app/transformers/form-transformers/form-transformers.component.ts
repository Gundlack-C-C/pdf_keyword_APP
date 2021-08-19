import { Component, OnInit, Output, EventEmitter, Directive } from '@angular/core';

@Component({
  selector: 'app-form-transformers',
  templateUrl: './form-transformers.component.html',
  styleUrls: ['./form-transformers.component.css']
})
export class FormTransformersComponent implements OnInit {
  @Output() ParameterChanged = new EventEmitter<{[key: string]: any}>();
  //Parameter
  ngram_range_min:number = 1;
  ngram_range_max:number = 1;
  metric:string = 'l2'

  metric_options: {[key: string]: string} = {
    "l1": "L1",
    "l2": "L2",
    "cosine": "Cosine",
    "euclidean": "Euclidean",
    "correlation": "Correlation",
    "hamming": "Hamming"
  }

  //Delay ParameterChanged Events
  T: any = null;
  static default: {[key: string]: any} = {
    "ngram_range_min": 1,
    "ngram_range_max": 1,
    "metric": 'l2'
  }
  get Metric_Options(): {[key: string]: string} {
    return Object.fromEntries(Object.entries(this.metric_options).filter(([k,v]) => k != this.metric));
  }
  get Parameter(): {[key: string]: any} {
    return {
      "ngram_range_min": this.ngram_range_min,
      "ngram_range_max": this.ngram_range_max,
      "metric": this.metric
    }
  }

  ngOnInit() {
    this.ParameterChanged.emit(this.Parameter);
  }

  onInputChanged() {
    clearTimeout(this.T)
    this.T = window.setTimeout(() => {
      this.ParameterChanged.emit(this.Parameter)
    }, 1000)
  }

}
