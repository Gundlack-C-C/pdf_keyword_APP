import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Text } from '../commons/models';
import { TextSpec } from '../commons/models.spec';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private BE: string;
  constructor(private env: EnvService, private http: HttpClient) { 
    this.BE = this.env.SERVICE_PDF;
  }

  getText(file: File): Promise<Text | null> {
    return new Promise<Text | null>((resolve, reject) => {
      if(this.BE == "MOCK") {
        resolve(new TextSpec())
      } else {
        const formData = new FormData()
        formData.append('file', file)
        this.http.post<Text>(`${this.BE}/api/text`, formData).toPromise<Text>().then((data: any) => {
          let text = new Text()
          text.Title = data['id']
          text.Short = data['text']
          resolve(text)
        }).catch((err) => {
          console.error(err)
          reject(err);
        });
      }
    });
  }
}
