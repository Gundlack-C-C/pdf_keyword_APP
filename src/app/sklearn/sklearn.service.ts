import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CorpusAnalytics, KeywordAnalytics, TextAnalytics } from '../commons/models';
import { EnvService } from '../env.service';
import { FormTfidfComponent } from './form-tfidf/form-tfidf.component';

@Injectable({
  providedIn: 'root'
})
export class SklearnService {
  private BE: string;
  constructor(private env: EnvService, private http: HttpClient) { 
    this.BE = this.env.SERVICE_SKLEARN;
  }

  getKeywords(mode: string, text: string,  param: {[key: string]: any}): Promise<any | null> {
    return new Promise<any>((resolve, reject) => {
      let data = {
        'text': text,
        'param': param
      }
      mode = mode.toLowerCase().includes('tfidf') ? "tfidf" : "count"; 
      this.http.post<any>(`${this.BE}/api/keywords/${mode}`,  JSON.stringify(data)).toPromise<CorpusAnalytics>().then((response: any) => {
        let data_result = new CorpusAnalytics()
        data_result.res = response['data'].map((item: any[]) => {
          let sentence = item[0]
          let keywords = item[1].map((key_item: any[]) => {
              return new KeywordAnalytics(key_item[0], key_item[1], key_item[2]);
          })
          return new TextAnalytics(sentence, keywords)
        })
        resolve(data_result)
      }).catch((err: HttpErrorResponse) => {
        console.error(err.message)
        reject(err);
      });
    });
  }
}
