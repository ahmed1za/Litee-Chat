import {EventEmitter, Injectable} from '@angular/core';
import {Messages} from "../models/messages";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GestionDatasService {
  private messages: Messages[]=[];
  public emmeteurDeSaisie : EventEmitter<Messages[]> = new EventEmitter<Messages[]>();
  baseUrl:string ='http://localhost/api/';
  constructor(private http:HttpClient) {
  }
  public getMessage(){
    return this.http.get<Messages[]>(this.baseUrl+'messageView.php');
  }
  public addMessage(message :Messages){
    // @ts-ignore
    return  this.http.post(this.baseUrl+'messageInsert.php', message);
  }
 /* public supprimerMessage(id:number){
    // @ts-ignore
    return this.http.delete(this.baseUrl+'delete.php?id='+id);
  }*/
  private notification(){
    this.emmeteurDeSaisie.emit(this.messages.slice());
  }

  public ajouter(s:Messages):boolean{
    if (s.message !=''){
      this.messages.push(s);
      this.notification();
      return true;
      }else
    {
      return false;
    }
    }


}
