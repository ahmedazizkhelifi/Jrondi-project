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
  editFacture(id: number, req: any) {
    /*  const req = {
      montant: Number(value[0].montant),
      remise: Number(value[0].remise),
      date: String(value[0].date),
      active: Boolean(value[0].active),
    };

    const req1 = {
      montant: 9999,
      remise: 10,
      date: '2000-06-04T23:00:00.000Z',
      active: 'false',
    }; */
    console.log('req:::', req);
    return this.http.put(`api/factures/${id}`, req);
  }
}
