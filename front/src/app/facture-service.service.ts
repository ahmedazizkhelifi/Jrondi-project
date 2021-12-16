import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FactureServiceService {
  constructor(private http: HttpClient) {}

  getFactures(id: number = -1): Observable<any> {
    if (id === -1) return this.http.get('api/factures');
    else return this.http.get(`api/factures/${id}`);
  }

  addFacture(facture: object): Observable<any> {
    return this.http.post(`api/factures/`, facture);
  }

  deleteFacture(id: number): Observable<any> {
    return this.http.delete(`api/factures/${id}`, { responseType: 'text' });
  }
}
