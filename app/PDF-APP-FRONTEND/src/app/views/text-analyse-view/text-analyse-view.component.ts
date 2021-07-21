import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TextSpec } from 'src/app/commons/models.spec';
import { Text } from 'src/app/commons/models';
import { AlgoInputSelectComponent } from '../algo-input-select/algo-input-select.component';
import { TextInputSelectComponent } from '../text-input-select/text-input-select.component';
import { TextInputViewComponent } from '../text-input-view/text-input-view.component';

@Component({
  selector: 'app-text-analyse-view',
  templateUrl: './text-analyse-view.component.html',
  styleUrls: ['./text-analyse-view.component.css']
})
export class TextAnalyseViewComponent extends TextInputViewComponent implements OnInit {
  // Required form Algorithm execution
  text: Text | null = new TextSpec()
  parameter: {[key: string]: any} = {}

  // Text Input
  options_input: {[key: string]: string[]} = TextInputSelectComponent.options;
  mode_input: string;
  mode_input_default = 'manual';

  // Algo Parameter Input
  options_algo: {[key: string]: string[]} = AlgoInputSelectComponent.options;
  mode_algo: string;
  mode_algo_default = 'sklearn_count';

  constructor(protected route: ActivatedRoute,protected router: Router) { 
    super(route, router)
  }

  set MODE_ALGO(val: string | null) {
    if(val && Object.keys(this.options_algo).includes(val))
      this.mode_algo = val;
    else {
      console.warn(`Unkwon input type: ${val}! Redirecting to [${this.mode_algo_default}]`)
      this.router.navigate([`text-input`, this.mode_algo_default])
    }
  }

  ngOnInit() {
    this.MODE_ALGO = this.route.snapshot.paramMap.get('type-algo')
    this.route.params.subscribe((params) => {
      this.MODE_ALGO = params['type-algo'];
    })
  }

  // Text Input
  onModeChanged(val: any) {
    console.log("Input Type Changed " + val)
  }

  onTextChanged(val: any) {
    this.text = val;
    console.log("Text Changed!")
  }

  // Algorithm Input
  onAlgoChanged(val: any) {
    console.log("Algorithm Changed " + val)
  }

  onParameterChanged(val: any) {
    console.log("Parameter Changed!")
  }
}
