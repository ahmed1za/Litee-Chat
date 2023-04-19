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
  private socket: any;



  constructor(private gestionDatas : GestionDatasService ,private route : ActivatedRoute,private socketService: SocketServiceService) {
    this.socket = this.socketService.socketInstance();

  }

  ngOnInit(){
  //  this.gestionDatas.donnee.subscribe(donnee=>this.destinataire_id = donnee);

    this.gestionDatas.emmeteurDeSaisie.subscribe((value)=>this.dataSaisie=value);
    this.route.queryParams.subscribe(params=>
    {
      this.nom=params['nom'];
      this.prenom=params['prenom'];
    });

    this.socket.on('new-message', () => {
      console.log("log de getMessage Js");
     this.onCharger();

    });


  }

  ngOnDestroy(): void {
  }


  public onCharger() {


  // @ts-ignore
     this.envoyeur_id = JSON.parse(localStorage.getItem('key'));
  // @ts-ignore
     this.envoyeur_id = this.envoyeur_id[0];

     // @ts-ignore
     this.destinataire_id= JSON.parse(localStorage.getItem('utilisateurCible'));
     // @ts-ignore


     // @ts-ignore




     if (this.envoyeur_id!=0 && this.envoyeur_id!=null && this.destinataire_id!=0 && this.destinataire_id!=null) {


 // @ts-ignore
       this.gestionDatas.getMessage(this.envoyeur_id, this.destinataire_id).subscribe((result: any) => {
   this.dataSaisie = result.data
for (let i =0 ; i < this.dataSaisie.length ;i++)
{
  // @ts-ignore
  console.log(this.dataSaisie[i].message)
}
 });



}else {
  console.log(this.envoyeur_id,"et",this.destinataire_id);
  console.log(this.gestionDatas);
}

  }

}
