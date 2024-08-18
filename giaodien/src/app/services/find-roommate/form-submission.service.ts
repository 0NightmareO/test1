
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
  
  @Injectable({
    providedIn: 'root'
  })
  export class FormSubmissionService {
    private apiUrl = 'http://localhost:5000/api/my-content'; 
  
    constructor(private http: HttpClient) { }
  
    addContent(formData: FormData): Observable<any> {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUZXN0U3ViamVjdCIsImp0aSI6IjExYjA2NmY5LWVjZTctNDIzYi04ZDUzLTFiNzc1N2IyNjRjOSIsImlkIjoiMiIsImVtYWlsIjoibWFuZ3hhaG9pQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiZXhwIjoxNzIzNjkxNTU1LCJpc3MiOiJUZXN0LmNvbSIsImF1ZCI6IlRlc3RBdWRpZW5jZSJ9.q71VzrRNT3qvsf2w5mAQf0o2Kr9uKrndGkrltanFOoE"; // Lấy token từ localStorage
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      return this.http.post(this.apiUrl +"/add-content", formData, { headers });
    }
    getContactName( ): Observable<any> {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUZXN0U3ViamVjdCIsImp0aSI6IjU2NDU0M2MyLWQ3NDAtNGViOC04MGUyLTRhNzY0OGM2YTgxNCIsImlkIjoiMiIsImVtYWlsIjoibWFuZ3hhaG9pQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiZXhwIjoxNzIzNzgxODU2LCJpc3MiOiJUZXN0LmNvbSIsImF1ZCI6IlRlc3RBdWRpZW5jZSJ9.gQP_jqpRKBwnRXhXTluv3F2pifB1T6tYfeYOmcESFps"; // Lấy token từ localStorage
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(this.apiUrl);
    }
  }
