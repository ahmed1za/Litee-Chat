import { Injectable } from '@angular/core';
import {io} from "socket.io-client";
import {Observable} from "rxjs";
import {Messages} from "../models/messages";
import {ZonePrincipaleComponent} from "../zone-principale/zone-principale.component";


@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  private socket:any;

  constructor() {
    this.socket = io('http://localhost:3000',{
      withCredentials:true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }});
  }

  public sendMessage(message : Messages): void {
    this.socket.emit('message', message);
    console.log("log de sendMessage");
  }

  public getMessages(): Observable<any> {

    return new Observable<any>(observer => {
      this.socket.on('message', (data: any) => {
        console.log("log de getMessage socket");
console.log(data);
        observer.next(data);
      });
    });

  }
  public socketInstance(){
    console.log("instance déclarée");
    return this.socket ;

  }
}
