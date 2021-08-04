import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformersComponent } from './transformers.component';
import { AppCommonModule } from '../commons/app.common.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormTransformersComponent } from './form-transformers/form-transformers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    TransformersComponent,
    FormTransformersComponent
  ],
  exports: [
    TransformersComponent, FormTransformersComponent
  ]
})
export class TransformersModule { }
