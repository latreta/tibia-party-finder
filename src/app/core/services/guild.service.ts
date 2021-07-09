import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class GuildService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  GetGuilds = (): Observable<any> => {
    return this.http.get<any>(`${this.apiService.ENDPOINT_URL}/guilds.json`);
  }

  GetGuildFromWorld = (worldName): Observable<any> => {
    return this.http.get<any>(
      `${this.apiService.ENDPOINT_URL}/${worldName}/guilds.json`
    );
  }
}
