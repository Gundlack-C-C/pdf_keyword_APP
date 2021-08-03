import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TextInputSelectComponent } from '../text-input-select/text-input-select.component';


@Component({
  selector: 'app-text-input-view',
  templateUrl: './text-input-view.component.html',
  styleUrls: ['./text-input-view.component.css']
})
export class TextInputViewComponent implements OnInit {

  options: {[key: string]: string[]} = TextInputSelectComponent.options;
  mode: string;
  mode_default = 'manual';

  constructor(protected route: ActivatedRoute,protected router: Router) { }

  set MODE(val: string | null) {
    if(val && Object.keys(this.options).includes(val))
      this.mode = val;
    else {
      console.warn(`Unkwon input type: ${val}! Redirecting to [${this.mode_default}]`)
      this.router.navigate([`text-input`, this.mode_default])
    }
  }

  ngOnInit() {
    const val = this.route.snapshot.paramMap.get('type');
    this.MODE = val;

    this.route.params.subscribe((params) => {
      this.MODE = val
    })
  }

  onModeChanged(val: any) {
    this.MODE = val
    this.router.navigate(['../', val], { relativeTo: this.route });
  }

  onTextChanged(val: any) {
  }
}
