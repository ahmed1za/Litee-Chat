import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GestionUtilisateurService} from "../services/gestion-utilisateur.service";
import {Router} from "@angular/router";
import {ParametresService} from "../services/parametres.service";
import {Parametres} from "../models/parametres";

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit{
  // @ts-ignore
  notifForm:FormGroup;
  // @ts-ignore
  selectedOption1 :boolean;
// @ts-ignore
  selectedOption2 :boolean;
// @ts-ignore
selectedOption3:boolean;
//@ts-ignore
selectedOption4 :boolean;

  constructor(private formBuilder:FormBuilder,private paramService:ParametresService, private router:Router) {
    this.creeFormulaire();
  }

  private creeFormulaire() {
    this.notifForm = this.formBuilder.group(
      {
        utilisateur_id:['',Validators.required],
        notif_group : ['',Validators.required],
        notif_inconnu :['',Validators.required],
        notif_contact :['',Validators.required],
        notif_system :['',Validators.required],
         }
    );
  }
  ngOnInit(): void {


    // @ts-ignore
    let utilisateur = JSON.parse(localStorage.getItem('key'));

    console.log(utilisateur);
    // @ts-ignore
    this.notifForm.controls.utilisateur_id.value = utilisateur[0];
    // @ts-ignore
    this.notifForm.controls.notif_group.value=this.selectedOption1;
    // @ts-ignore
    this.notifForm.controls.notif_contact.value=this.selectedOption2;
    // @ts-ignore
    this.notifForm.controls.notif_inconnu.value=this.selectedOption3;
    // @ts-ignore
    this.notifForm.controls.notif_system.value=this.selectedOption4;




    // @ts-ignore
    this.paramService.ajouter(new Parametres(this.notifForm.controls.utilisateur_id.value,
      // @ts-ignore
      this.notifForm.controls.notif_group,
      // @ts-ignore
      this.notifForm.controls.notif_inconnu,
      // @ts-ignore
      this.notifForm.controls.notif_contact,
// @ts-ignore
      this.notifForm.controls.notif_system
    ));


console.log(this.notifForm);

    // @ts-ignore
    if (this.notifForm.controls.notiif_group != 0 || this.notifForm.controls.notiif_group != null &&
      // @ts-ignore
      this.notifForm.controls.notiif_inconnu != 0 || this.notifForm.controls.notiif_group != null &&
      // @ts-ignore
      this.notifForm.controls.notiif_contact != 0 || this.notifForm.controls.notiif_contact != null &&
      // @ts-ignore
      this.notifForm.controls.notiif_system != 0 || this.notifForm.controls.notiif_group != null) {

  this.paramService.addNotification(this.notifForm.value).subscribe(data=>{
    console.log(this.notifForm);
  })
}
  }

  onOption1Selected() {
    console.log(this.selectedOption1);

  }

  onOption2Selected() {
    console.log(this.selectedOption2);
  }

  onOption3Selected() {
    console.log(this.selectedOption3);
  }

  onOption4Selected() {
    console.log(this.selectedOption4);
    console.log(this.notifForm);
  }

}
