import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SklearnComponent } from './sklearn.component';
import { FormTfidfComponent } from './form-tfidf/form-tfidf.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormCountComponent } from './form-count/form-count.component';
import { AppCommonModule } from '../commons/app.common.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
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
    FormCountComponent,
    SklearnComponent
  ]
})
export class SklearnModule { }
