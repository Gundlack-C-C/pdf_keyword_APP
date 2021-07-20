import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Text } from '../commons/models'
import { TextSpec } from '../commons/models.spec';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  private BE = "http://localhost/wiki/";
  constructor(private http: HttpClient) { }

  random(n: number = 1): Promise<Text | null> {
    return new Promise<Text | null>((resolve, reject) => {

      resolve(new TextSpec())
      return;
      this.http.get<Text>(`${this.BE}/random`).toPromise<Text>().then((data: Text) => {
          resolve(data)
      }).catch((err) => {
        reject(err);
      });
    });
  }
}
