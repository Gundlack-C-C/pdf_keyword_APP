import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parameter, SessionInput, Text } from 'src/app/commons/models';
import { SessionService } from 'src/app/session/session.service';
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
  text: Text | null = null;
  parameter: {[key: string]: any} = {};

  // Text Input
  options_input: {[key: string]: string[]} = TextInputSelectComponent.options;
  mode_input: string;
  mode_input_default = 'manual';

  // Algo Parameter Input
  options_algo: {[key: string]: string[]} = AlgoInputSelectComponent.options;
  mode_algo: string;
  mode_algo_default = 'sklearn_count';

  constructor(protected route: ActivatedRoute,protected router: Router, protected sessionService: SessionService) { 
    super(route, router)
    this.sessionService = sessionService
  }

  set MODE_ALGO(val: string | null) {
    if(val && Object.keys(this.options_algo).includes(val))
      this.mode_algo = val;
    else {
      console.warn(`Unkwon input type: ${val}! Redirecting to [${this.mode_algo_default}]`)
      this.router.navigate([`text-input`, this.mode_algo_default])
    }
  }

  onCreateSession() {
    console.log("You clicked")
    const input: any = {
      "input" : {
        "text" : "My name is Thomas",
        "param": this.parameter
      },
      "target" : this.mode_algo
    }
    console.log(JSON.stringify(input))
    this.sessionService.createSession(input);
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
    this.mode_input = val;
  }

  onTextChanged(val: any) {
    console.log("Text Changed!")
    this.text = val;
  }

  // Algorithm Input
  onAlgoChanged(val: any) {
    console.log("Algorithm Changed " + val)
    this.mode_algo = val
  }

  onParameterChanged(val: any) {
    console.log("Parameter Changed!")
    this.parameter = val
  }
}
