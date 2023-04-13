import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Personne} from "../models/personne";
import {Parametres} from "../models/parametres";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParametresService {
  private parametres : Parametres[]=[];

  baseUrl:string ='http://localhost/api/';

  constructor(private http:HttpClient) { }

  public addNotification(notif:any): Observable<any>{
    // @ts-ignore
    return this.http.post(this.baseUrl+'notif.php', notif);
  }

  public ajouter(p:Parametres) : boolean {
    if (p && p.id_utilisateur !=0 && p.notif_contact != null && p.notif_group!=null && p.notif_inconnu!=null && p.notif_system!=null ){
      this. parametres.push(p);
      return true;
    }else {
      return false
    }

}}
