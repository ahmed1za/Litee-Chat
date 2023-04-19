
import {EventEmitter, Injectable} from '@angular/core';
import {Messages} from "../models/messages";
import {HttpClient} from "@angular/common/http";
import {Personne} from "../models/personne";
import {BehaviorSubject, Observable} from "rxjs";
import {SocketServiceService} from "./socket-service.service";



@Injectable({
  providedIn: 'root'
})
export class GestionDatasService {

  private donneesource = new BehaviorSubject<number>(Number(''));
   donnee = this.donneesource.asObservable();
  echangeDonnees(donnee: number) {
    this.donneesource.next(donnee);
  }
  private messages: Messages[]=[];
  public emmeteurDeSaisie : EventEmitter<Messages[]> = new EventEmitter<Messages[]>();
  baseUrl:string ='http://localhost/api/';
  constructor(private http:HttpClient ,private socket:SocketServiceService) {
  }
  public getMessage(envoyeur_id: number, destinataire_id: number): Observable<Messages[]> {
    let socket = this.socket.getMessages();

    return new Observable((observer) => {
    /*  socket.subscribe((data: any) => {
        console.log("log de getMessage socket");
        console.log(data);
      });*/


     /* socket.on('new-message', (message: Messages) => {
        observer.next([message]); // Envoyer le message en tant que tableau de messages
      });*/

      // Appeler la méthode HTTP pour récupérer les messages existants
      this.http.get<Messages[]>(`${this.baseUrl}messageView.php?envoyeur_id=${envoyeur_id}&destinataire_id=${destinataire_id}`)
        .subscribe((messages: Messages[]) => {
          observer.next(messages);
        });
      // Gérer les erreurs

    /*  socket.on('error', (error: any) => {
        observer.error(error);
      });*/
    });
  }
  public addMessage(message :Messages,envoyeur_id:Personne,destinataire_id:Personne){

   this.socket.sendMessage(message);

    // @ts-ignore
    return  this.http.post(this.baseUrl+'messageInsert.php', message,envoyeur_id,destinataire_id);
  }
  /*
  public supprimerMessage(id:number){
    // @ts-ignore
    return this.http.delete(this.baseUrl+'delete.php?id='+id);
  }*/
  private notification(){
    this.emmeteurDeSaisie.emit(this.messages.slice());
  }

  public ajouter(s:Messages):boolean{
    if (s.message !='' && s.envoyeur_id!=null&& s.destinataire_id!=null){
      this.messages.push(s);
      this.notification();
      return true;
    }else
    {
      return false;
    }
  }


}
