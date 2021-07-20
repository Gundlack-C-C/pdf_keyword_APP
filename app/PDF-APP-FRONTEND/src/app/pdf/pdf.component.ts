import { Component, OnInit } from '@angular/core';
import { PdfService } from './pdf.service';
import { Text } from '../commons/models';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  text: Text
  fileName: string
  fileSize: number
  constructor(private pdf_service: PdfService) { }

  ngOnInit() {
  }

  onFileSelected(event: Event) {
    if(event.target) {
      const target = event.target as HTMLInputElement;
      const file:File = (target.files as FileList)[0];
      if(file) {
        this.fileName = file.name;
        this.fileSize = file.size;
        
        this.pdf_service.getText(file).then((data: Text | null) => {
            if(data) {
              this.text = data
            } else {
              console.error("Unable to get text from pdf!")
            }
        })

      }
    }
  } 
}
