import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  GetWorlds() {
    return this.http.get<any>(`${this.apiService.ENDPOINT_URL}/worlds.json`);
  }

  GetWorld(worldName: string) {
    return this.http.get<any>(`${this.apiService.ENDPOINT_URL}/world/${worldName}.json`);
  }
}
