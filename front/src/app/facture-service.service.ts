import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FactureServiceService {
  constructor(private http: HttpClient) {}

  getDate() {
    return this.http.get('api/factures');
  }
}
