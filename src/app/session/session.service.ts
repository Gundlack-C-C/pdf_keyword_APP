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

  createSession(payload: string): Promise<Text | null> {
    return new Promise<Text | null>((resolve, reject) => {
        this.http.post(`${this.BE}/session`, JSON.stringify(payload)).toPromise()
        .then((data: any) => {
          console.log(data)
          resolve(data)
        }).catch((err) => {
          console.error(err)
          reject(err);
        });
      
    });
  }
}
