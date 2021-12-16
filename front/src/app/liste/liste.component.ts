import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from '../facture';
import { FactureServiceService } from '../facture-service.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  constructor(private service: FactureServiceService, private router: Router) {}
  factures: any[] = [];
  ngOnInit(): void {
    this.getFactures();
  }

  getFactures() {
    this.service.getFactures().subscribe(
      (response) => {
        console.log(response);
        this.factures = response;
        console.log(this.factures);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateFacture(id: number) {
    console.log(id);
    this.router.navigate(['/edit']);
  }

  deleteFacture(id: number) {
    console.log(id);
    this.service.deleteFacture(id).subscribe(
      (response) => {
        console.log(response);
        this.factures = response;
        this.getFactures();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
