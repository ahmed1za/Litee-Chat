import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  title:string="Litee Chat"
  constructor(private router : Router) {
  }


  onClickAccueil() {
    this.router.navigate(['connexion']);
  }

}
