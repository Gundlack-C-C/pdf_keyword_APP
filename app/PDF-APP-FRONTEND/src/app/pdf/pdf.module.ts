import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfComponent } from './pdf.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PdfComponent],
  exports: [PdfComponent]
})
export class PdfModule { }
