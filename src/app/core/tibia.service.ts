import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

export interface ApiInformation {
  api_version: number;
  execution_time: number;
  last_updated: string;
  timestamp: string;
}

export interface World {
  name: string;
  online: number;
  location: string;
  worldtype: string;
  additional: string;
}

export interface WorldList {
  worlds: any[];
  information: ApiInformation;
}

@Injectable({
  providedIn: 'root'
})
export class TibiaService {

  ENDPOINT_URL = `${environment.TIBIA_API_URL}/${environment.CURRENT_API_VERSION}`;

  constructor(private http: HttpClient) { }

  GetWorlds = (): Observable<WorldList>  => {
    return this.http.get<WorldList>(`${this.ENDPOINT_URL}/worlds.json`);
  }

  GetWorld = (world: string): Observable<any> => {
    return this.http.get<any>(`${this.ENDPOINT_URL}/world/${world}.json`);
  }
}
