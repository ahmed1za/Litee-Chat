import {Component, OnInit} from '@angular/core';
import {GestionUtilisateurService} from "../services/gestion-utilisateur.service";
import {Personne} from "../models/personne";
import {Router} from "@angular/router";
import {GestionDatasService} from "../services/gestion-datas.service";
import {ZonePrincipaleComponent} from "../zone-principale/zone-principale.component";


@Component({
  selector: 'app-zone-de-gauche',
  templateUrl: './zone-de-gauche.component.html',
  styleUrls: ['./zone-de-gauche.component.css']
})
export class ZoneDeGaucheComponent implements OnInit{

  utilisateurs:any;
  constructor(private utilisateur : GestionUtilisateurService,
              private route:Router,
              private dataservice :GestionDatasService,
              private zonePrincipale: ZonePrincipaleComponent,)
  {
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

  onClick(util:any) {

    const index = this.utilisateurs.findIndex((u: any) => u.id === util.id);
    const utilisateurCible = this.utilisateurs[index];
    this.dataservice.echangeDonnees(utilisateurCible.id);
    localStorage.setItem('utilisateurCible',JSON.stringify(utilisateurCible.id));

      // @ts-ignore
   // this.route.navigate(['app-page-principale'],{queryParams:{nomDestinataire:utilisateurCible.nom,prenomDestinataire:utilisateurCible.prenom}})
    this.zonePrincipale.onCharger();



    }


  onParam() {
    this.route.navigate(['parametres']);
  }
}
