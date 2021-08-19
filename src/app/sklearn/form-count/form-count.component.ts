import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-count',
  templateUrl: './form-count.component.html',
  styleUrls: ['./form-count.component.css']
})
export class FormCountComponent implements OnInit{

  @Output() ParameterChanged = new EventEmitter<{[key: string]: any}>();
  min_df = 1;
  max_df = "1.0";
  max_feature = 512;
  ngram_range_min = 1;
  ngram_range_max = 1;
  T: any = null;
  static default: {[key: string]: any} = {
    "ngram_range_min": 1,
    "ngram_range_max": 1,
    "min_df": 1,
    "max_df": "1.0",
    "max_feature": 512
  }
  
  ngOnInit() {
    this.ParameterChanged.emit(this.Parameter);
  }

  get Parameter(): {[key: string]: any} {
    return {
      "ngram_range_min":this.ngram_range_min,
      "ngram_range_max":this.ngram_range_max,
      "min_df": this.min_df,
      "max_df": this.max_df,
      "max_feature": this.max_feature
    }
  }

  onInputChanged() {
    clearTimeout(this.T)
    this.T = window.setTimeout(() => {
      this.ParameterChanged.emit(this.Parameter)
    }, 1000)
  }

}
