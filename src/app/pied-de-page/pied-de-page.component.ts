import {Component, OnInit,} from '@angular/core';
import {GestionDatasService} from "../services/gestion-datas.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Messages} from "../models/messages";



@Component({
  selector: 'app-pied-de-page',
  templateUrl: './pied-de-page.component.html',
  styleUrls: ['./pied-de-page.component.css']
})
export class PiedDePageComponent implements OnInit{

  // @ts-ignore
  zoneSaisie: FormGroup;
  // @ts-ignore
  nom:string;
  // @ts-ignore
  prenom:string;
  // @ts-ignore
  destinataire_id:number;

constructor(private formBuilder:FormBuilder,private gestionDatas:GestionDatasService, private router:ActivatedRoute) {
  this.creeFormulaire();
}

  ngOnInit(): void {
   // this.router.queryParams.subscribe(params=>{
     // this.nom=params['nomDestinataire'];
      //this.prenom=params['prenomDestinataire'];

    //})

this.gestionDatas.donnee.subscribe(donnee=>this.destinataire_id = donnee);

//console.log("log de gestion data donnee :", this.gestionDatas.donnee);
    }

  private creeFormulaire() {
    this.zoneSaisie = this.formBuilder.group({
      message :['',Validators.required],
      envoyeur_id:['',Validators.required],
      destinataire_id:['',Validators.required]
    });
  }

  onClickButton() {
    // @ts-ignore
    this.gestionDatas.ajouter(new Messages(this.zoneSaisie.controls.message.value,this.zoneSaisie.controls.envoyeur_id.value,this.zoneSaisie.controls.destinataire_id.value));



    // @ts-ignore
    let utilisateur = JSON.parse(localStorage.getItem('key'));

    // @ts-ignore
    this.zoneSaisie.controls.envoyeur_id.value = utilisateur[0];
    // @ts-ignore
    this.zoneSaisie.controls.destinataire_id.value = this.destinataire_id;
    // @ts-ignore
    if (this.zoneSaisie.controls.envoyeur_id.value!=0 && this.zoneSaisie.controls.destinataire_id.value!=0) {
      // @ts-ignore
      this.gestionDatas.addMessage(this.zoneSaisie.value).subscribe(data => {
        // @ts-ignore
      //  console.log("log :", this.zoneSaisie.controls.envoyeur_id);

       /* console.log("premier log :", this.destinataire_id);
        console.log("deuxieme log :", this.gestionDatas);*/


      });
    }

  }}



