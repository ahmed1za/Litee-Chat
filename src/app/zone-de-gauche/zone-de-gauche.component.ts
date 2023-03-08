import {Component, OnInit} from '@angular/core';
import {GestionUtilisateurService} from "../services/gestion-utilisateur.service";
import {Personne} from "../models/personne";

@Component({
  selector: 'app-zone-de-gauche',
  templateUrl: './zone-de-gauche.component.html',
  styleUrls: ['./zone-de-gauche.component.css']
})
export class ZoneDeGaucheComponent implements OnInit{
  utilisateurs:any;
  constructor(private utilisateur : GestionUtilisateurService) {
  }

  ngOnInit(): void {
    this.utilisateur.getUtilisateur().subscribe((result:any)=>{
      this.utilisateurs = result.data;
    });
  }


  delete(util:any) {


    this.utilisateur.supprimerUtilisateur(util.id).subscribe((data:any)=>{

      this.utilisateurs = this.utilisateurs.filter((u:any)=> u !== util) ;
    });
  }
}
