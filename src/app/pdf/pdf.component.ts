import { Component, EventEmitter, Output } from '@angular/core';
import { PdfService } from './pdf.service';
import { Text } from '../commons/models';
import { TextInputComponent } from '../commons/text/text-input/text-input.component'

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent extends TextInputComponent {
  fileName: string
  fileSize: number
  
  constructor(private pdf_service: PdfService) { 
    super()
  }

  onFileSelected(event: Event) {
    if(event.target) {
      const target = event.target as HTMLInputElement;
      const file:File = (target.files as FileList)[0];
      if(file) {
        this.fileName = file.name;
        this.fileSize = file.size;
        
        this.pdf_service.getText(file).then((data: Text | null) => {
          this.TEXT = data
          if(!data)
            console.error("Unable to get text from pdf!")
        })

      }
    }
  } 
}
