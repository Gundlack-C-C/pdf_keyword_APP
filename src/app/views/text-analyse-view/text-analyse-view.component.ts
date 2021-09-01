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
  text: Text;
  parameter: {[key: string]: any} = {};

  // Text Input
  options_input: {[key: string]: string[]} = TextInputSelectComponent.options;
  mode_input: string;
  mode_input_default = 'manual';

  // Algo Parameter Input
  options_algo: {[key: string]: string[]} = AlgoInputSelectComponent.options;
  target_algo_default = 'sklearn_count';
  target_algo: string;
  mode_algo: string;
  mode_algo_default = 'count';
 

  constructor(protected route: ActivatedRoute,protected router: Router, public sessionService: SessionService) { 
    super(route, router)
  }

  set TARGET_ALGO(val: string | null) {
    if(val && Object.keys(this.options_algo).includes(val)) {
      const target_config = this.options_algo[val]
      this.target_algo = target_config[2];
      this.mode_algo = target_config[3];
    } else {
      console.warn(`Unkwon input type: ${val}! Redirecting to [${this.mode_algo_default}]`)
      this.router.navigate([`text-input`, this.mode_algo_default])
    }
  }

  onCreateSession() {
    var data = {
      target: this.target_algo,
      input: {
        text: this.text.Short,
        mode: this.mode_algo,
        param: this.parameter,
      }
    }
    this.sessionService.createSession(data)
      .then((id: any) => {
        // TODO: Do something with the id (redirect, display pop up...)
        console.log(id)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  ngOnInit() {
    this.TARGET_ALGO = this.route.snapshot.paramMap.get('type-algo')
    this.route.params.subscribe((params) => {
      this.TARGET_ALGO = params['type-algo'];
    })
  }

  // Text Input
  onInputModeChanged(val: any) {
    console.log("Input Type Changed " + val)
    this.mode_input = val;
  }

  onTextChanged(val: any) {
    console.log("Text Changed!")
    this.text = val;
  }

  // Algorithm Input
  onTargetChanged(val: any) {
    console.log("Algorithm Changed " + val)
    this.TARGET_ALGO = val
  }

  onParameterChanged(val: any) {
    console.log("Parameter Changed!")
    this.parameter = val
  }
}
