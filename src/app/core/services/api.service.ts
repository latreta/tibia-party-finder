import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ENDPOINT_URL = `${environment.MOCK_URL}`;

  constructor() {
    if (environment.IS_MOCK_DISABLED){
      this.ENDPOINT_URL = `${environment.TIBIA_API_URL}/${environment.CURRENT_API_VERSION}`;
    }
  }

}
