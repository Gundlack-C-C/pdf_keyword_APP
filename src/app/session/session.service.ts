import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionInput } from '../commons/models';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private BE: string = "";
  public Sessions: string[] = [];
  constructor(private env: EnvService, private http: HttpClient) { 
    this.BE = this.env.SERVICE_SESSION;
  }

  onSessionSuccess(id: string) {
    this.Sessions.push(id)
  }

  createSession(payload: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        this.http.post(`${this.BE}/session`, payload).toPromise()
        .then((id: any) => {
          this.onSessionSuccess(id)
          resolve(id);
        }).catch((err) => {
          console.error(err.message)
          reject(err);
        });
      
    });
  }
}
