import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Text } from '../commons/models'
import { TextSpec } from '../commons/models.spec';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  private BE: string;
  constructor(private env: EnvService, private http: HttpClient) { 
    this.BE = this.env.SERVICE_WIKI;
  }

  random(n: number = 1): Promise<Text | null> {
    return new Promise<Text | null>((resolve, reject) => {
      if(this.BE=="MOCK") {
        resolve(new TextSpec())
      } else {
        this.http.get<Text>(`${this.BE}/random`).toPromise<Text>().then((data: Text) => {
          resolve(new Text(data.id, data.text, data.keywords))
        }).catch((err) => {
          console.error(err)
          reject(err);
        });
      }
    });
  }
}
