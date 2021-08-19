import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionInput } from '../commons/models';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private BE: string;
  constructor(private env: EnvService, private http: HttpClient) { 
    this.BE = this.env.SERVICE_SESSION;
  }

  createSession(payload: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        this.http.post(`${this.BE}/session`, JSON.stringify(this.formatOutput(payload))).toPromise()
        .then((data: any) => {
          resolve(data)
        }).catch((err) => {
          reject(err);
        });
      
    });
  }

  private formatOutput(payload: any) {
    const selectedAlgo = payload.target.match("^.*?(?=_)")
    return {
      "input" : {
        "text" : payload.text,
        "param": payload.param
      },
      "target" : selectedAlgo[0]
    }
  }
}
