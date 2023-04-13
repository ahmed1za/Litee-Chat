import {Component, OnDestroy, OnInit} from '@angular/core';
import {GestionDatasService} from "../services/gestion-datas.service";
import {Messages} from "../models/messages";
import {ActivatedRoute} from "@angular/router";
import {SocketServiceService} from "../services/socket-service.service";



@Component({
  selector: 'app-zone-principale',
  templateUrl: './zone-principale.component.html',
  styleUrls: ['./zone-principale.component.css']
})
export class ZonePrincipaleComponent implements OnInit, OnDestroy{

  // @ts-ignore
  envoyeur_id:number;
  // @ts-ignore
  destinataire_id:number;
 // @ts-ignore
  public dataSaisie: Messages[];
  public nom: any;
  public prenom: any;



  constructor(private gestionDatas : GestionDatasService ,private route : ActivatedRoute,) {

  }

  ngOnInit(){
    this.gestionDatas.donnee.subscribe(donnee=>this.destinataire_id = donnee);

    this.gestionDatas.emmeteurDeSaisie.subscribe((value)=>this.dataSaisie=value);
    this.route.queryParams.subscribe(params=>
    {
      this.nom=params['nom'];
      this.prenom=params['prenom'];
    });

  }

  ngOnDestroy(): void {
  }


   onCharger() {

  // @ts-ignore
  this.envoyeur_id = JSON.parse(localStorage.getItem('key'));
  // @ts-ignore
     this.envoyeur_id = this.envoyeur_id[0];



     if (this.envoyeur_id!=0 && this.envoyeur_id!=null && this.destinataire_id!=0 && this.destinataire_id!=null) {


 // @ts-ignore
       this.gestionDatas.getMessage(this.envoyeur_id, this.destinataire_id).subscribe((result: any) => {
   this.dataSaisie = result.data

 });


}else {
  console.log(this.envoyeur_id,"et",this.destinataire_id);
  console.log(this.gestionDatas);
}

  }
}
