import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SklearnComponent } from './sklearn.component';
import { FormTfidfComponent } from './form-tfidf/form-tfidf.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormCountComponent } from './form-count/form-count.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    SklearnComponent,
    FormTfidfComponent,
    FormCountComponent
  ],
  exports: [
    FormTfidfComponent,
    FormCountComponent
  ]
})
export class SklearnModule { }
