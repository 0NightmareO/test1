import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStoreService } from '../token-store.service';

@Injectable({
  providedIn: 'root'
})
export class NewListContentService {
  private apiUrl = 'http://localhost:5000/api/my-content'; 
  constructor(private _http: HttpClient, private token: TokenStoreService) { }

  getData(): Observable<any>{
    const token = this.token.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
     console.log(headers)
    return this._http.get(this.apiUrl);
}
}
