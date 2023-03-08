import {Component, OnInit,} from '@angular/core';
import {GestionDatasService} from "../services/gestion-datas.service";
import {Router} from "@angular/router";
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

constructor(private formBuilder:FormBuilder,private gestionDatas:GestionDatasService, private router:Router) {
  this.creeFormulaire();
}

  ngOnInit(): void {

    }

  private creeFormulaire() {
    this.zoneSaisie = this.formBuilder.group({
      message :['',Validators.required]
    });
  }

  onClickButton() {

//@ts-ignore
    this.gestionDatas.ajouter(new Messages(this.zoneSaisie.controls.message.value));


    // @ts-ignore
    this.gestionDatas.addMessage(this.zoneSaisie.value).subscribe(data=>{
      this.router.navigate(['app-page-principale'])

    });
  console.log(this.gestionDatas);

    // @ts-ignore
    this.zoneSaisie.reset();
    }

  }



