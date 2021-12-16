import { Component, OnInit } from '@angular/core';
import { Facture } from '../facture';
import { Router } from '@angular/router';
import { FactureServiceService } from '../facture-service.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  facture: Facture = new Facture();
  submitted = false;
  constructor(private service: FactureServiceService, private router: Router) {}

  ngOnInit(): void {}

  newFacture(): void {
    this.submitted = false;
    this.facture = new Facture();
  }

  save() {
    this.service.addFacture(this.facture).subscribe((data) => {
      console.log(data);
      this.facture = new Facture();
      this.gotoList();
    });
    //addFacture
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/']);
  }
}
