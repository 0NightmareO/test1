import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  getCities() {
    throw new Error('Method not implemented.');
  }
  private url = 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json';

  constructor(private http: HttpClient) {}

  getLocations(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
