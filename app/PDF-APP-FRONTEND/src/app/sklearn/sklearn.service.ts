import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class SklearnService {
  private BE: string;
  constructor(private env: EnvService, private http: HttpClient) { 
    this.BE = this.env.SERVICE_PDF;
  }

  getKeywords(mode: string, text: string,  param: {[key: string]: any}): Promise<any | null> {
    return new Promise<any>((resolve, reject) => {
      const formData = new FormData()
      formData.append('text', text)
      formData.append('param', JSON.stringify(param))
      this.http.post<any>(`${this.BE}/api/keywords/${mode}`, formData).toPromise<Text>().then((data: any) => {
        resolve(data)
      }).catch((err) => {
        console.error(err)
        reject(err);
      });
    });
  }
}
