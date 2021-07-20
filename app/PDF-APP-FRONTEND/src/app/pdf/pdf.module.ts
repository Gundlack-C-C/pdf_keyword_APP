import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComponent } from './pdf.component';
import { AppCommonModule } from '../commons/app.common.module';
import { PdfService } from './pdf.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PdfComponent
  ],
  exports: [PdfComponent],
  providers: [PdfService]
})
export class PdfModule { }
