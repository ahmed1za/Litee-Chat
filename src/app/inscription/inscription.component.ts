import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GestionUtilisateurService} from "../services/gestion-utilisateur.service";
import {Personne} from "../models/personne";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
 //@ts-ignore
  angularForm: FormGroup;


  ngOnInit() : void{

  }
  constructor(private formBuilder:FormBuilder,private gestionPersonne :GestionUtilisateurService, private router:Router) {
    this.creeFormulaire();

  }
  private creeFormulaire() {
    this.angularForm = this.formBuilder.group(
      {
        nom : ['',Validators.required],
        prenom :['',Validators.required],
        email :['',Validators.required],
        dateDeNaissance :['',Validators.required],
        numtel:['', Validators.required],
        motDePasse:['',Validators.required]
      }
    );
  }
  private champInvalide(champ: string) {

    // @ts-ignore
    return this.angularForm.controls[champ].invalid &&
      // @ts-ignore
        (this.angularForm.controls[champ].dirty ||
          // @ts-ignore
          this.angularForm.controls[champ].touched);
  }

  nomInvalide() {
    return this.champInvalide("nom");

  }

  prenomInvalide() {
  return this.champInvalide("prenom");
  }

  problemeValidation() {
    // @ts-ignore
    return this.angularForm.pristine || this.angularForm.invalid;

  }

  onEnregistrer() {

      // @ts-ignore
      this.gestionPersonne.ajouter(new Personne(this.angularForm.controls.nom.value, this.angularForm.controls.prenom.value,
        // @ts-ignore
        this.angularForm.controls.email.value,
        // @ts-ignore
        this.angularForm.controls.dateDeNaissance.value,
        // @ts-ignore
        this.angularForm.controls.numtel.value, this.angularForm.controls.motDePasse.value));


    this.gestionPersonne.addUtilisateur(this.angularForm.value).subscribe(
      data=>{
        this.router.navigate(['app-page-principale']);
      });
      // @ts-ignore
      this.angularForm.reset();







  }



}
