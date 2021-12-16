import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FactureServiceService {
  constructor(private http: HttpClient) {}

  getDate() {
    return this.http.get('api/factures');
  }

  getFactures(id: number = -1): Observable<any> {
    if (id === -1) return this.http.get('api/factures');
    else return this.http.get(`api/factures/${id}`);
  }
}
