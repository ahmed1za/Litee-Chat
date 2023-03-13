
import {EventEmitter, Injectable} from '@angular/core';
import {Personne} from "../models/personne";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GestionUtilisateurService {
  private personnes : Personne[] = [];
  public emmeteurPersonne : EventEmitter<Personne[]> = new EventEmitter<Personne[]>();

  constructor(private http:HttpClient) { }

  baseUrl:string ='http://localhost/api/';

  public getUtilisateur(){
    return this.http.get<Personne[]>(this.baseUrl+'view.php');
  }

  public login(email:string){
    return this.http.get<Personne[]>(this.baseUrl+'getUtilisateur.php?email='+email);
  }

  public addUtilisateur(personne :any){
    return  this.http.post(this.baseUrl+'insert.php', personne);
  }

  public supprimerUtilisateur(id:number){
    // @ts-ignore
    return this.http.delete(this.baseUrl+'delete.php?id='+id);
  }
  private notifier(){
    this.emmeteurPersonne.emit(this.personnes.slice());
  }
  public ajouter(p:Personne) : boolean {
    if (p && p.nom !='' && p.prenom != '' && p.email!='' && p.numeTel!=null && p.dateDeNaissance!=null && p.motDePasse != ''){
      this.personnes.push(p);
      this.notifier();
      return true;
    }else {
      return false
    }

  }
  public charger(){
    this.notifier();
  }

}
