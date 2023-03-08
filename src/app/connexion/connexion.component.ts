import {Component, OnInit} from '@angular/core';
import {GestionUtilisateurService} from "../services/gestion-utilisateur.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{
  //@ts-ignore
  connexionForm: FormGroup;
  constructor(private utilisateur:GestionUtilisateurService, private formBuilder:FormBuilder,private router:Router) {
   // @ts-ignore
    return  this.formCreate();
  }
  ngOnInit(): void {
  }




  private formCreate() {
    this.connexionForm= this.formBuilder.group({
      email:['',Validators.required],
      motDePasse:['',Validators.required]
    })

  }

  onConnexion() {
    this.utilisateur.login(this.connexionForm.controls['email'].value).subscribe(data=>
    {
      console.log(this.connexionForm);
    })

    if (this.connexionForm.controls['email'].value === this.utilisateur.login(this.connexionForm.controls['email'].value)){
      this.router.navigate(['/']);
      console.log("connexion reussi");
    }else {
      console.log();
    }

  }
}
