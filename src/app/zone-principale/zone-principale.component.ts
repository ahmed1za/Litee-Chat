import {Component, OnDestroy, OnInit} from '@angular/core';
import {GestionDatasService} from "../services/gestion-datas.service";
import {Messages} from "../models/messages";

@Component({
  selector: 'app-zone-principale',
  templateUrl: './zone-principale.component.html',
  styleUrls: ['./zone-principale.component.css']
})
export class ZonePrincipaleComponent implements OnInit, OnDestroy{
 // @ts-ignore
  public dataSaisie: Messages[];
  constructor(private gestionDatas : GestionDatasService,) {
  }
  ngOnInit(){

    this.gestionDatas.emmeteurDeSaisie.subscribe((value)=>this.dataSaisie=value);
  }

  ngOnDestroy(): void {
  }


  onCharger() {
    this.gestionDatas.getMessage().subscribe((result:any)=>{
      this.dataSaisie = result.data;});
  }
}
