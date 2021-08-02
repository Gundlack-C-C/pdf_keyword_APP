import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EnvService {

constructor() { }

  get SERVICE_WIKI(): string {
    return environment.services.wiki;
  }

  get SERVICE_PDF(): string {
    return environment.services.pdf;
  }

  get SERVICE_SKLEARN(): string {
    return environment.services.sklearn;
  }
}
