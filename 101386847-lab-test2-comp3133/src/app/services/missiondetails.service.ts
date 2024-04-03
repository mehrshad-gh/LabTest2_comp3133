import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionDetailsService {

  constructor(private http: HttpClient) { }

  getMissionDetails(flightNumber: string): Observable<any> {
    const url = `https://api.spacexdata.com/v3/launches/${flightNumber}`;
    return this.http.get<any>(url);
  }

}
