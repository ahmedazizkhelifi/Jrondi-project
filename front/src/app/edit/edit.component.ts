import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../facture';
import { FactureServiceService } from '../facture-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  facture: Facture = new Facture();
  id: number = 0;
  constructor(
    private service: FactureServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('id:', this.id);
    this.service.getFactures(this.id).subscribe(
      (data) => {
        data = {
          id: this.id,
          montant: data[0].montant,
          remise: data[0].remise,
          date: String(data[0].date).substring(0, 10),
          active: data[0].active,
        };
        this.facture = data;
        console.log('this.facture', this.facture);
      },
      (error) => console.log(error)
    );
  }

  updateFacture() {
    //console.log(this.facture);
    this.service.editFacture(this.id, this.facture).subscribe(
      (data) => {
        console.log('data', data);
        this.facture = new Facture();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  newFacture(): void {
    this.facture = new Facture();
  }

  gotoList() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.updateFacture();
  }
}
