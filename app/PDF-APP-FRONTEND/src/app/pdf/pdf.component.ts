import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  text: string
  fileName: string
  fileSize: number
  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event: Event) {
    if(event.target) {
      const target = event.target as HTMLInputElement;
      const file:File = (target.files as FileList)[0];
      if(file) {
        this.fileName = file.name;
        this.fileSize = file.size;
      }
    }
  } 
}
