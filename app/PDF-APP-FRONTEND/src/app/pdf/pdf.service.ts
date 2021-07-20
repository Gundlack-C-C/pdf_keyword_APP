import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Text } from '../commons/models';
import { TextSpec } from '../commons/models.spec';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private BE = "http://localhost/pdf/";
  constructor(private http: HttpClient) { }

  getText(file: File): Promise<Text | null> {
    return new Promise<Text | null>((resolve, reject) => {

      resolve(new TextSpec())
      return;
      
      this.http.get<Text>(`${this.BE}/gettext`).toPromise<Text>().then((data: Text) => {
          resolve(data)
      }).catch((err) => {
        reject(err);
      });
    });
  }
}
