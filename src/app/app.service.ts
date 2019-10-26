import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiURL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  get(arg0: string) {
    return this.http.get(`${this.apiURL}${arg0}`);
  }
}
